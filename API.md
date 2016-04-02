#API

##Conventions

**server-name** - Url address like "http://pressa.ru/mobile"

**client-id** - unique identifier (like ‘D4gh7m’) that represents company or type of client’s application  


## 1. Login request.

### Request URL

    <server-name>/<client-id>/login

### Request POST data inside post body section.

    login = user
    password = ****

### Response

    { 'status': 0, message: 'Welcome', 'user_id': 345, ‘token’: ‘3ewq6sde6wfew6few’ }
    { 'status': 1, message: 'Error' }


##2. Top 10 articles list.

### Request URL

    <server-name>/<client-id>/top10

### Response

    [{'title': 'The UFO', 'image': '<url>', 'id': 123}, {'title':...}] 
    


##3. Top 10 articles detail.

### Request URL

    <server-name>/<client-id>/top10/123

### Response

    { 'text': 'bla bla', 'title': 'bla' }
    


##4. Category list.

### Request URL

    <server-name>/<client-id>/categories

### Response

   [{'thumb': 'path/to/image', 'sequence': '3', 'name': 'Sport'}, {...}]
   


##5. Category detail.

### Request URL

    <server-name>/<client-id>/categories/144

### Response

    {"name": "Sport", "id": 123, "journals": 
        [
            {"tumb": "/previewmts/api/get/cover/journal/170-220/1945", 
             "description": "bla bla", 
             "sequence": 0, 
             "price": 15.95, 
             "mobile_thumb": "http://pressa.ru/image", 
             "id": 1945, 
             "name": "Zdorove"
         } , {....}
        ]
    }


##6. Journal detail.

### Request URL

    <server-name>/<client-id>/journal/423

### Response

    {"name": "AIF", 
     "issues": [
                 {
                  "friendly_date": "May 26", 
                  "mobile_thumb": "http://pressa.ru/image", 
                  "name": "32-2016", 
                  "id": 87017
                 }, {...}
                ]
    }

##7. Issue detail.

### Request URL

    <server-name>/<client-id>/issue/423

### Response

    {
     "name": "32-2016", 
     "pages": [{"cover": "http://pressa.ru/1-low.jpg"}, {...}]
    }


##8. Popular.

### Request URL

    <server-name>/<client-id>/popular

### Response

    {
     "journals": [{name: 'AIF', 'cover': 'uri', 'id': 2341}, {…}] 
     "magazines": [{name: 'MK', 'cover': 'uri', 'id': 2341}, {…}]
    }


##9. Search.

### Request URL

    <server-name>/<client-id>/search

### POST body data

	{'type': 'all|journal|magazine', 'tags': 'aif'}

### Response

      { 
		'type': 'all|journal|magazine', 
		'tags': 'aif', 
		'journals': [ {'sequence': 12, 
                            'name': 'AIF', 
                            'price': '120', 
                            'cover': 'url-to-image', 
                            'description': 'description'} … {}
				]
	}



##10. Registration.

### Request URL

    <server-name>/<client-id>/registration

### POST body data

	{'username': 'user', 'password': '1234', 'email': 'ddd@dd.dd'}

### Response

        {
        'status': 1,
        'message': 'Пользователь с таким логином уже существует',
        'user_id': 1254,
        }


        {
        'status': 1,
        'message': 'Вы успешно зарегистрированы',
        'user_id': 1254,
        }
				


