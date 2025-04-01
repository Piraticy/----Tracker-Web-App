function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index').setTitle('Finance Tracker');
}

function onOpen() {
    setupSheet(); // Ensure the sheet is set up when opened
}

function setupSheet() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // Check and create "Income" sheet
    var incomeSheet = ss.getSheetByName("Income");
    if (!incomeSheet) {
        incomeSheet = ss.insertSheet("Income");
        incomeSheet.appendRow(["Date", "Category", "Amount", "Description"]);
    }

    // Check and create "Expense" sheet
    var expenseSheet = ss.getSheetByName("Expense");
    if (!expenseSheet) {
        expenseSheet = ss.insertSheet("Expense");
        expenseSheet.appendRow(["Date", "Category", "Amount", "Description"]);
    }
}

function addTransaction(date, type, category, amount, description) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(type);
    
    if (!sheet) {
        setupSheet(); // Create sheets if missing
        sheet = ss.getSheetByName(type);
    }

    sheet.appendRow([date, category, amount, description]);
    return "Transaction added successfully!";
}

function getData(sheetName) {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(sheetName);

    if (!sheet) {
        setupSheet(); // Ensure sheets exist
        sheet = ss.getSheetByName(sheetName);
    }

    var data = sheet.getDataRange().getValues();
    return data.slice(1); // Remove headers from output
}
