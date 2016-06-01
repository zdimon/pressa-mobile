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


	{'username': 'user', 'password': '123', 'email': 'www@ww.ww'}

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



##11 Edit profile.

### Request URL

    <server-name>/<client-id>/save_profile

### POST body data

	{'username': 'user', 'password': '123', 'email': 'www@ww.ww', 'token': '3r23xedqwe2e3xedqwdqwq2423r'}

### Response

    {'status': 0|1 'message': 'ok|some error'}


##12 Get users' categories.

### Request URL

    <server-name>/<client-id>/get_user_categories/<token>



### Response

    {'status': 0|1 'message': 'ok|some error', 'categories': [
            {'id': 12, 'name': 'Женские', 'exists': true},
            {'id': 13, 'name': 'Мужские', 'exists': false}
     ]}


##13 Save users' categories.

### Request URL

    <server-name>/<client-id>/save_user_categories

### Request json POST data inside request's body.

    { 'token': 'eb09c5a2bccb5d5224701091b8a57e4f9bae93d7', 
      'categories': [
                        {u'id': 150, u'exists': False}, 
                        {u'id': 151, u'exists': True}, 
                        {u'id': 152, u'exists': True}
                    ]
    }


### Response

        {
        'status': 1,
        'message': 'error'
        }
	


        { status=0,  message="ok",  categories=[...]}


##14 Get users' collection.

### Request URL

    <server-name>/<client-id>/my_collection/<token>



### Response

        {
        'status': 1,
        'message': 'error'
        }
	


         
      {
        'status': 0,
        'journals': [
                     {
                     'id': 12, 
                     'journal_id': 1234, 
                     'name': 'AIF',
                     'mobile_thumb': 'http://pressa.ru/image.jpg', 
                     'description': 'description', 
                     'price': '10.00',
                     'count': '3' 
                    },
                    {...}
                    ]
      }
    
    id - last transaction
    count - ammount of issues which was bought



##15 Read one page in good quality.

### Request URL

    <server-name>/<client-id>/<page-id>/<token>/page

###Example
    
    http://api.pressa.ru/mobile/test/1621534/eb09c5a2bccb5d5224701091b8a57e4f9bae93d7/page

### Response

Image file in jpeg format.    
				


##16 Request to purchase the issue.

### Request URL

    <server-name>/<client-id>/<user-id>/<issue_id>/<hash-sign>/buy_issue

###Example
    
    http://api.pressa.ru/mobile/test/2/1/63f90dc58b0bbf0f6d18a6f1035f08c0/buy_issue

####Where

    client-id - name of the partner (is given during registration)
    user-id - User's identifier
    issue-id - Issue's identifier
    hash-sing - secure string which is formed by md5(client_id+user_id+issue_id+secret_word)
    **secret_word** - secure string which is given during registration
    

### Response

    {"status": 1, "message": "..."}

    {"status": 0, "message": "payment has been created"}



