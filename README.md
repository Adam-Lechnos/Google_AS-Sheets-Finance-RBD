# Google_AS-Sheets-Finance-RBD
Google Sheets automation for tracking really bad market days (RBD)

## Google Apps Script Configuration

### Triggers

| Function | Event Source ( - t)^ | Time Based Trigger ( - nn)* | Time of Day | Failure Notifications |
| -------- | ------------ | ------------------ | ----------- | --------------------- |
| snedEmailAlert | From speadsheet - On change | n/a | n/a | Daily |

*\*Day of the month if `Month timer` is selected or Day of Week if `Week timer` is selected* \
*\^Event type if `From Spreadsheet` is selected*

<sup><sub>Spreadsheet Name: `RBD Alert Calculator`</sup></sub>
