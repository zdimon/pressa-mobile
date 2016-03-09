#API

## 1. Login request.

### Requiest URL

    <server-name>/login

### Request POST data

    login = user
    password = ****

### Response

    { 'status': 0, message: 'Welcome', 'user_id': 345 }
    { 'status': 1, message: 'Error' }


##2. Top 10 articles list.

### Requiest URL

    <server-name>/top10

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'image': '<url>'}, {'title':...}] }
    { 'status': 1, message: 'Error' }


##3. Top 10 articles detail.

### Requiest URL

    <server-name>/top10/123

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'text': 'bla bla', 'image': '<url>', 'link': '<url>', 'author': 'Ivanov', 'journal': 'Zdorove'}] }
    { 'status': 1, message: 'Error' }


##4. Category list.

### Requiest URL

    <server-name>/category

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'image': '<url>'}, {'title':...}] }
    { 'status': 1, message: 'Error' }


##5. Category detail.

### Requiest URL

    <server-name>/category/123

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'text': 'bla bla', 'image': '<url>', 'link': '<url>', 'author': 'Ivanov', 'journal': 'Zdorove'}] }
    { 'status': 1, message: 'Error' }





