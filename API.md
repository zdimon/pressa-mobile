#API

## 1 Login request.

### URL

    <server-name>/login

### Request POST data

    login = user
    password = ****

### Response

    { 'status': 0, message: 'Welcome', 'user_id': 345 }
    { 'status': 1, message: 'Error' }


##2 Top 10 articles.

### URL

    <server-name>/top10

### Response
