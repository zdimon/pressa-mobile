#API

##Conventions

**server-name**  Url address like "http://pressa.ru/mobile-api"

**<client-id>**  unique identifier (like ‘D4gh7m’) that represents company or type of client’s application  


## 1. Login request.

### Request URL

    <server-name>/<client-id>/login

### Request POST data

    login = user
    password = ****

### Response

    { 'status': 0, message: 'Welcome', 'user_id': 345 }
    { 'status': 1, message: 'Error' }


##2. Top 10 articles list.

### Request URL

    <server-name>/<client-id>/top10

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'image': '<url>'}, {'title':...}] }
    { 'status': 1, message: 'Error' }


##3. Top 10 articles detail.

### Request URL

    <server-name>/<client-id>/top10/123

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'text': 'bla bla', 'image': '<url>', 'link': '<url>', 'author': 'Ivanov', 'journal': 'Zdorove'}] }
    { 'status': 1, message: 'Error' }


##4. Category list.

### Requiest URL

    <server-name>/<client-id>/category

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'image': '<url>'}, {'title':...}] }
    { 'status': 1, message: 'Error' }


##5. Category detail.

### Requiest URL

    <server-name>/<client-id>/category/123

### Response

    { 'status': 0, 'data': [{'title': 'The UFO', 'text': 'bla bla', 'image': '<url>', 'link': '<url>', 'author': 'Ivanov', 'journal': 'Zdorove'}] }
    { 'status': 1, message: 'Error' }





