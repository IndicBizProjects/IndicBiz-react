var EXISTING_SHEET_ID = ''

var HEADERS = [
  'Timestamp',
  'Name',
  'Email',
  'Phone',
  'Company',
  'Role',
  'Services',
  'Other service',
  'Project status',
  'Website',
  'Budget',
  'Timeline',
  'Message',
  'Source',
  'Follow-up',
]

function setupContactSheet() {
  var ss = SpreadsheetApp.create('IndicBiz Contact Enquiries')
  prepareSheet(ss.getSheets()[0])
  saveSpreadsheet(ss)
  logSetup()
}

function bindExistingSheet() {
  if (!EXISTING_SHEET_ID) {
    throw new Error('Paste your spreadsheet ID into EXISTING_SHEET_ID first.')
  }
  var ss = SpreadsheetApp.openById(EXISTING_SHEET_ID)
  prepareSheet(ss.getSheets()[0])
  saveSpreadsheet(ss)
  logSetup()
}

function prepareSheet(sheet) {
  sheet.setName('Enquiries')
  sheet.clear()
  sheet.appendRow(HEADERS)
  sheet.setFrozenRows(1)
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold')
  sheet.setColumnWidth(1, 170)
  sheet.setColumnWidth(13, 360)
}

function saveSpreadsheet(ss) {
  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: ss.getId(),
    SHEET_URL: ss.getUrl(),
  })
}

function logSetup() {
  var props = PropertiesService.getScriptProperties().getProperties()
  Logger.log('Sheet URL: ' + props.SHEET_URL)
  Logger.log('Spreadsheet ID: ' + props.SPREADSHEET_ID)
  Logger.log('Next: Deploy → New deployment → Web app → Anyone')
}

function doGet() {
  return jsonOutput({ ok: true, service: 'indicbiz-contact' })
}

function doPost(e) {
  try {
    var data = readPayload(e)
    var ss = openContactSpreadsheet()
    var sheet = ss.getSheetByName('Enquiries') || ss.getSheets()[0]

    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.role || '',
      data.services || '',
      data.otherService || '',
      data.status || '',
      data.website || '',
      data.budget || '',
      data.timeline || '',
      data.message || '',
      data.source || '',
      'New',
    ])

    return jsonOutput({ ok: true })
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) })
  }
}

function readPayload(e) {
  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents)
    } catch (err) {
      return e.parameter || {}
    }
  }
  return (e && e.parameter) || {}
}

function openContactSpreadsheet() {
  var id = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID')
  if (!id) throw new Error('Run setupContactSheet first.')
  return SpreadsheetApp.openById(id)
}

function jsonOutput(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON)
}
