/**
 * IndicBiz contact form → Google Sheet.
 *
 * Setup (once):
 * 1. https://script.google.com  → New project → paste this file
 * 2. Run setupContactSheet  (Review permissions → Allow)
 * 3. View → Logs for the Sheet URL
 * 4. Deploy → New deployment → Web app
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Copy the web app URL into IndicBiz/.env.local:
 *      VITE_CONTACT_API_URL=https://script.google.com/macros/s/.../exec
 * 6. Restart the Vite dev server
 *
 * If the sheet already exists, run ensureVisitorColumns instead of setupContactSheet.
 */

var EXISTING_SHEET_ID = '1wHhxxl-x17rN1SQffzoNZ8WBxeGh9VdKjfBs_aB0sHo'

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
  'IP',
  'City',
  'Region',
  'Country',
  'Postal',
  'ISP',
  'Timezone',
  'VPN',
  'Location',
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

function ensureVisitorColumns() {
  var sheet = openContactSpreadsheet().getSheetByName('Enquiries') || openContactSpreadsheet().getSheets()[0]
  var lastCol = Math.max(sheet.getLastColumn(), 1)
  var headers = sheet.getRange(1, 1, 1, lastCol).getValues()[0].map(function (h) {
    return String(h).trim()
  })

  HEADERS.forEach(function (header) {
    if (headers.indexOf(header) === -1) {
      sheet.getRange(1, sheet.getLastColumn() + 1).setValue(header)
      headers.push(header)
    }
  })

  sheet.getRange(1, 1, 1, sheet.getLastColumn()).setFontWeight('bold')
  Logger.log('Visitor columns are in place.')
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
    var headers = sheet.getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1)).getValues()[0]
    var row = headers.map(function (header) {
      return valueForHeader(String(header).trim(), data)
    })
    sheet.appendRow(row)
    return jsonOutput({ ok: true })
  } catch (err) {
    return jsonOutput({ ok: false, error: String(err) })
  }
}

function valueForHeader(header, data) {
  var map = {
    Timestamp: new Date(),
    Name: data.name || '',
    Email: data.email || '',
    Phone: data.phone || '',
    Company: data.company || '',
    Role: data.role || '',
    Services: data.services || '',
    'Other service': data.otherService || '',
    'Project status': data.status || '',
    Website: data.website || '',
    Budget: data.budget || '',
    Timeline: data.timeline || '',
    Message: data.message || '',
    Source: data.source || '',
    'Follow-up': 'New',
    IP: data.ip || '',
    City: data.city || '',
    Region: data.region || '',
    Country: data.country || '',
    Postal: data.postal || '',
    ISP: data.isp || '',
    Timezone: data.timezone || '',
    VPN: data.vpn || '',
    Location: data.location || '',
  }
  return map[header] != null ? map[header] : ''
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
