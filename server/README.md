# Backend Server API

## Users


Path | Method | description
-------|------|------------
/api/users/:id | GET | get user by id
/api/users/ | POST | create new user [using the user schema]
/api/users/:id | PUT | change the user active state [send 'isActive' property as Boolean]


## Transactions

Path | Method | description
-------|------|------------
/api/transactions/:year/:month | GET | get transactions
/api/transactions/balance/:year/:month | GET | get transactions balance
/api/transactions/ | POST | create new transaction report

## Schemas

### User Schema

Property | default | required | description
---------|---------|----------|------------
first | | true | the user first name
last | | true | the user last name
email | | true | the user email address
password | | true | the user password
isActive | true | false | is the user account active

### Transaction Schema

Property | default | required | description
---------|---------|----------|------------
transactionDate | | true | transaction date [datatype: Date]
transactionType | | true | transaction type [datatype: String]
description | | true | transaction description
charge | 0 | false | the transaction charge
deposit | 0 | false | the transaction deposit
notes | '' | false | some notes