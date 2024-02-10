function sendEmailAlert() {
  // Fetch error status
  var errorRange = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("RBD Alert Page").getRange("A5"); 
  var errorStatus = errorRange.getValue();
  // Check totals sales
  if (errorStatus == true){
    // Fetch the email address
    var emailAddress = 'adam.lechnos@gmail.com';
  
    // Send Alert Email.
    var message = 'RBD Alert has been triggered, meaning, today is considered a Really Bad Day in the market. Make it a better day by taking advantage in buying at a discount. Check the "RBD Alert Page" tab: https://docs.google.com/spreadsheets/d/1YV9F9AVKqcCvJszPgZWIr7_k8mb0XWAxIoLCeJllBVY'; // Second column
    var subject = 'RBD Alert Warning';
    MailApp.sendEmail(emailAddress, subject, message);
    }
}