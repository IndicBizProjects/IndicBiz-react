/**
 * IndicBiz reviews form + sheet + public JSON feed.
 *
 * Keep these titles in sync with src/data/reviews.js
 *
 * Setup:
 * 1. https://script.google.com  → New project → paste this file
 * 2. Run setupReviewsForm  (Review permissions → Allow)
 * 3. View → Logs for Form URL, Sheet URL
 * 4. Run seedExistingReviews once to add the three current reviews
 * 5. Deploy → New deployment → Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 6. Copy the web app URL into IndicBiz/.env.local:
 *      VITE_REVIEWS_FEED_URL=https://script.google.com/macros/s/.../exec
 * 7. In the sheet, set Approved to Yes for any new form response before it shows
 *    Set Featured to Yes on one review to use the large card
 */

var PROJECT_IDS = {
  'Destinize Tours': 'destinize-tours',
  'Blitz India Engineering': 'blitz-india-engineering',
  'Tamooz': 'tamooz',
  Other: '',
}

var CATEGORIES = [
  'Brand Identity',
  'Web Services',
  'Product Design',
  'Growth & SEO',
  'Other',
]

var PROJECTS = ['Destinize Tours', 'Blitz India Engineering', 'Tamooz', 'Other']

var RATING_FACTORS = [
  { title: 'Quality of service', help: 'How well did the work meet what you asked for?' },
  { title: 'Timeliness of delivery', help: 'How reliably did we meet the dates we agreed?' },
  { title: 'Communication and response', help: 'How promptly did we reply, and how clear and easy was it to work with us?' },
]

function setupReviewsForm() {
  var form = FormApp.create('Share your IndicBiz review')
  form.setDescription(
    'We would be pleased if you could review the service you took from us. Tell us how the work felt, and give it a rating. We read every response before it appears on the site.'
  )
  form.setCollectEmail(false)
  form.setAllowResponseEdits(false)
  form.setConfirmationMessage('Thank you. We will review this before it appears on the site.')
  form.setCollectEmail(false)
  form.setAllowResponseEdits(false)
  form.setConfirmationMessage('Thank you. We will review this before it appears on the site.')

  addReviewQuestions(form)

  var ss = SpreadsheetApp.create('IndicBiz Reviews')
  form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId())
  SpreadsheetApp.flush()
  Utilities.sleep(2500)

  var sheet = getResponseSheet(ss)
  var lastCol = Math.max(sheet.getLastColumn(), 1)
  sheet.getRange(1, lastCol + 1).setValue('Approved')
  sheet.getRange(1, lastCol + 2).setValue('Featured')
  sheet.setFrozenRows(1)

  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: ss.getId(),
    FORM_ID: form.getId(),
    FORM_URL: form.getPublishedUrl(),
    FORM_EDIT_URL: form.getEditUrl(),
    SHEET_URL: ss.getUrl(),
  })

  logSetup()
}

function seedExistingReviews() {
  var ss = openReviewsSpreadsheet()
  var sheet = getResponseSheet(ss)
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
  var col = function (name) {
    return headers.findIndex(function (h) {
      return String(h).trim().toLowerCase() === name.toLowerCase()
    }) + 1
  }

  var seeds = [
    {
      Name: 'Founding team',
      'Company / Business': 'Destinize Tours',
      'Name of your company': 'Destinize Tours',
      Role: 'Travel platform',
      'Service taken': 'Web experience',
      Project: 'Destinize Tours',
      Review:
        'Tours and booking finally sit in a structure we can keep using. We did not get a pretty one-off. We got a site the team can update.',
      Approved: 'Yes',
      Featured: 'Yes',
    },
    {
      Name: 'Leadership team',
      'Company / Business': 'Blitz India Engineering',
      'Name of your company': 'Blitz India Engineering',
      Role: 'Corporate presence',
      'Service taken': 'Brand and web',
      Project: 'Blitz India Engineering',
      Review:
        'We needed a presence that felt like an engineering firm, not a generic brochure. The identity and site now speak with one voice.',
      Approved: 'Yes',
      Featured: 'No',
    },
    {
      Name: 'Product team',
      'Company / Business': 'Tamooz',
      'Name of your company': 'Tamooz',
      Role: 'Product design',
      'Service taken': 'Product design',
      Project: 'Tamooz',
      Review:
        'The product had the data. It did not have a calm way to act on it. Priorities are visible now, without extra noise.',
      Approved: 'Yes',
      Featured: 'No',
    },
  ]

  seeds.forEach(function (seed) {
    var row = new Array(headers.length).fill('')
    Object.keys(seed).forEach(function (key) {
      var index = col(key)
      if (index > 0) row[index - 1] = seed[key]
    })
    if (!row[0]) row[0] = new Date()
    sheet.appendRow(row)
  })

  Logger.log('Seeded 3 approved reviews.')
}

function doGet() {
  var output = ContentService.createTextOutput(JSON.stringify({ reviews: readApprovedReviews() }))
  output.setMimeType(ContentService.MimeType.JSON)
  return output
}

function logSetup() {
  var props = PropertiesService.getScriptProperties().getProperties()
  Logger.log('Form (share this with clients): ' + props.FORM_URL)
  Logger.log('Form editor: ' + props.FORM_EDIT_URL)
  Logger.log('Sheet: ' + props.SHEET_URL)
  Logger.log('After deploying the web app, put that URL in VITE_REVIEWS_FEED_URL')
}

function addReviewQuestions(form) {
  form
    .addTextItem()
    .setTitle('Name')
    .setHelpText('Your name, as it should appear on the site.')
    .setRequired(true)

  form
    .addTextItem()
    .setTitle('Company / Business')
    .setHelpText('The business or brand you represent.')
    .setRequired(true)

  form
    .addTextItem()
    .setTitle('Role')
    .setHelpText('Example: Founder, Product lead, Marketing head.')
    .setRequired(true)

  form
    .addCheckboxItem()
    .setTitle('Service(s) taken')
    .setChoiceValues(CATEGORIES)
    .showOtherOption(true)
    .setRequired(true)

  form
    .addTextItem()
    .setTitle('Project')
    .setRequired(true)

  RATING_FACTORS.forEach(function (factor) {
    addRatingScale(form, factor.title, factor.help)
  })

  form
    .addScaleItem()
    .setTitle('Overall experience')
    .setHelpText('Taking everything together, how would you rate the engagement?')
    .setBounds(1, 5)
    .setLabels('Poor', 'Excellent')
    .setRequired(true)

  form
    .addParagraphTextItem()
    .setTitle('Review')
    .setHelpText('What the work felt like. You do not need awards or traffic numbers.')
    .setRequired(true)

  form
    .addParagraphTextItem()
    .setTitle('Additional feedback')
    .setHelpText('This helps us improve. It will not be shown on the site.')
    .setRequired(false)
}

function upgradeReviewsForm() {
  var editUrl = PropertiesService.getScriptProperties().getProperty('FORM_EDIT_URL')
  if (!editUrl) throw new Error('Run setupReviewsForm first, or paste the form edit URL into Script Properties as FORM_EDIT_URL.')

  var form = FormApp.openByUrl(editUrl)

  form.getItems().forEach(function (item) {
    var title = item.getTitle()
    var type = item.getType()

    if (title === 'Client name') item.asTextItem().setTitle('Name')
    if (title === 'Name of your company' || title === 'Company name' || title === 'Company') {
      item.asTextItem().setTitle('Company / Business')
    }
    if (title === 'Category' || title === 'Service taken') {
      try { item.asCheckboxItem().setTitle('Service(s) taken') } catch (err) {
        try { item.asMultipleChoiceItem().setTitle('Service(s) taken') } catch (ignored) {}
      }
    }

    if (/additional feedback/i.test(title) && type == FormApp.ItemType.PARAGRAPH_TEXT) {
      item.asParagraphTextItem()
        .setTitle('Additional feedback')
        .setHelpText('This helps us improve. It will not be shown on the site.')
        .setRequired(false)
    }

    if (title === 'Review' && type == FormApp.ItemType.PARAGRAPH_TEXT) {
      item.asParagraphTextItem()
        .setHelpText('What the work felt like. You do not need awards or traffic numbers.')
        .setRequired(true)
    }

    if (title === 'Project' && type == FormApp.ItemType.MULTIPLE_CHOICE) {
      item.asMultipleChoiceItem().setChoiceValues(PROJECTS).setRequired(true)
    }
    if (title === 'Project' && type == FormApp.ItemType.LIST) {
      item.asListItem().setChoiceValues(PROJECTS).setRequired(true)
    }
  })

  var titles = form.getItems().map(function (item) {
    return item.getTitle()
  })

  if (titles.indexOf('Name') === -1) {
    form.addTextItem().setTitle('Name').setHelpText('Your name, as it should appear on the site.').setRequired(true)
  }
  if (titles.indexOf('Company / Business') === -1 && titles.indexOf('Name of your company') === -1) {
    form.addTextItem().setTitle('Company / Business').setHelpText('The business or brand you represent.').setRequired(true)
  }
  if (titles.indexOf('Role') === -1) {
    form.addTextItem().setTitle('Role').setHelpText('Example: Founder, Product lead, Marketing head.').setRequired(true)
  }
  if (titles.indexOf('Service(s) taken') === -1 && titles.indexOf('Service taken') === -1) {
    form.addCheckboxItem().setTitle('Service(s) taken').setChoiceValues(CATEGORIES).showOtherOption(true).setRequired(true)
  }
  RATING_FACTORS.forEach(function (factor) {
    if (titles.indexOf(factor.title) === -1) {
      addRatingScale(form, factor.title, factor.help)
    }
  })
  if (titles.indexOf('Overall experience') === -1 && titles.indexOf('Rating') === -1) {
    form.addScaleItem().setTitle('Overall experience').setHelpText('Taking everything together, how would you rate the engagement?').setBounds(1, 5).setLabels('Poor', 'Excellent').setRequired(true)
  }
  if (titles.indexOf('Additional feedback') === -1) {
    form.addParagraphTextItem().setTitle('Additional feedback').setHelpText('This helps us improve. It will not be shown on the site.')
  }

  Logger.log('Form fields: Name, Company / Business, Role, Service(s) taken, Project, Quality of service, Timeliness of delivery, Communication and response, Overall experience, Review, Additional feedback.')
}

function addRatingScale(form, title, help) {
  form.addScaleItem().setTitle(title).setHelpText(help).setBounds(1, 5).setLabels('Poor', 'Excellent').setRequired(true)
}

function readApprovedReviews() {
  var sheet = getResponseSheet(openReviewsSpreadsheet())
  var values = sheet.getDataRange().getValues()
  if (values.length < 2) return []

  var headers = values[0].map(function (h) {
    return String(h).trim()
  })
  var idx = function (name) {
    return headers.findIndex(function (h) {
      return h.toLowerCase() === name.toLowerCase()
    })
  }

  return values
    .slice(1)
    .map(function (row) {
      var get = function (name) {
        var i = idx(name)
        return i >= 0 ? String(row[i] || '').trim() : ''
      }
      var getAny = function (names) {
        for (var n = 0; n < names.length; n++) {
          var value = get(names[n])
          if (value) return value
        }
        return ''
      }
      var project = getAny(['Project'])
      return {
        name: getAny(['Name', 'Client name']),
        company: getAny(['Company / Business', 'Name of your company', 'Company name', 'Company']),
        role: getAny(['Role']),
        category: getAny(['Service(s) taken', 'Service taken', 'Category']),
        rating: getAny(['Overall experience', 'Rating', 'Overall']),
        quality: getAny(['Quality of service', 'Service quality']),
        delivery: getAny(['Timeliness of delivery', 'Delivery time']),
        communication: getAny(['Communication and response', 'Clarity of communication', 'Speed of response', 'Communication', 'Response time']),
        quote: getAny(['Review']),
        feedback: getAny(['Additional feedback', 'Additional Feedback']),
        project: project,
        projectId: PROJECT_IDS[project] || '',
        featured: /^yes$/i.test(getAny(['Featured'])),
        approved: /^yes$/i.test(getAny(['Approved'])),
      }
    })
    .filter(function (review) {
      return review.approved && review.quote && (review.name || review.company)
    })
}

function openReviewsSpreadsheet() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID')
  if (!id) throw new Error('Run setupReviewsForm first.')
  return SpreadsheetApp.openById(id)
}

function getResponseSheet(ss) {
  var sheets = ss.getSheets()
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName().indexOf('Form Responses') === 0) return sheets[i]
  }
  return sheets[0]
}
