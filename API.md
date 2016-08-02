#API

##Conventions

**server-name** - Url address like "http://pressa.ru/mobile"

**client-id** - unique identifier (like ‘D4gh7m’) that represents company or type of client’s application  


## 1. Login request.

### Request URL

    <server-name>/<client-id>/<sign>/login

### Request POST data inside post body section.

    login = user
    password = ****

####sign = md5(login+password+secret_word)

### Response

    { 
        'status': 0, 
        'message: 'Welcome', 
        'user_id': 345, 
        ‘token’: ‘3ewq6sde6wfew6few’,
        'username': 'vovan', 
        'email': 'email@gmail.com' 

    }


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

    <server-name>/<client-id>/423/journal_detail

### Example

    http://pressa.ru/mobile/test/423/journal_detail

### Response

    {"name": "AIF", 
     "issues": [
                 {
                  "friendly_date": "May 26", 
                  "mobile_thumb": "http://pressa.ru/image", 
                  "name": "32-2016", 
                  'release_date': "2016-01-01", 
                  "id": 87017
                 }, {...}
                ]
    }

##7. Issue detail.

### Request URL

    <server-name>/<client-id>/423/issue_detail

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

    <server-name>/<client-id>/<sign>registration

### POST body data


	{'username': 'user', 'password': '123', 'email': 'www@ww.ww'}

####sign = md5(username+password+email+secret_word)

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

        {
        'status': 1,
        'message': 'Security error',
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

- **client-id** - name of the partner (is given during registration)
- **user-id** - User's identifier
- **issue-id** - Issue's identifier
- **hash-sing** - secure string which is formed by md5(client_id+user_id+issue_id+secret_word)
- **secret_word** - secure string which is given during registration


### Response

    {"status": 1, "message": "..."}

    {"status": 0, "message": "payment has been created"}

##17 Request to get a list of the subscriptions types.

### Request URL

    <server-name>/<client-id>/get_subscriptions

###Example

    http://pressa.ru/mobile/test/get_subscriptions

###Responce

    [
        {'id': '7', 'code': '---', 'name': u'Подписка на 1 неделю'},
        {'id': '1', 'code': '---', 'name': u'Подписка на 1 месяц'},
        {'id': '3', 'code': '---', 'name': u'Подписка на 3 месяца'},
        {'id': '6', 'code': '---', 'name': u'Подписка на 6 месяцев'},
        {'id': '12', 'code': '---', 'name': u'Подписка на 12 месяцев'},
    ]


##18 Request to buy the subscription.

### Request URL

    <server-name>/<client-id>/<user-id>/<type-subscription>/<hash-sign>/buy_subscription

###Example
    
    http://pressa.ru/mobile/test/2/7/63f90dc58b0bbf0f6d18a6f1035f08c0/buy_subscription

####Where

- **client-id** - name of the partner (is given during registration)
- **type-subscription** - Type of the subscription (7,1,3,6 or 12)
- **user-id** - User's identifier
- **hash-sing** - secure string which is formed by md5(client-id+user-id+type-subscription+secret-word)
- **secret-word** - secure string which is given during registration


### Response

    {"status": 0, "date_expire": "2016-07-09", "message": "Subscription has been added."}

    {'status': 1, 'message': 'Sign is wrong!' }

##19 Retrieve the article list related to given page number.

### Request URL

    <server-name>/<client-id>/<issue-id>/<page-number>/get_article_by_page

###Example
    
    http://pressa.ru/mobile/test/91378/1/get_article_by_page

### Response

    {'status': 1, 'message': 'Для этой страницы статьи отсутствуют!' }

    {'status': 0, 'articles': [
        {
            'id': 123
            'title': 'С новым годом',
            'text': '.....',
            'author': 'Дима',
            'images': [
                        {'src': 'http://pressa.ru/static/image1.jpg', 'author': 'Вася'},
                        {'src': 'http://pressa.ru/static/image2.jpg', 'author': 'Петя'}
                      ]
        }
    ] }


##20 Geting new issues.

### Request URL

    <server-name>/<client-id>/get_new

###Example
    
    http://pressa.ru/mobile/test/get_new

### Response

    [
        {"image": "...", "id": 91772, 'name': '....'}, 
        
        {...}
    ]


##21 Geting new issues from categories.

### Request URL

    <server-name>/<client-id>/<cat_id>-<cat_id>.../get_new_by_categories

###Example
    
    http://pressa.ru/mobile/leeco/all/151-153/0/0/get_new_by_categories

    http://pressa.ru/mobile/leeco/magazine/151-153/2016-01-01/2016-03-01/get_new_by_categories

151-153 - list of the categorie's IDs

Ежедневные - 146
еженедельные - 147
ежемесячные - 163

magazine|paper|book|all - type of the issues


### Response

    [
        {"image": "...", "id": 91772, 'name': '....'}, 
        
        {...}
    ]


##22 Adding object to the favorite list.

### Request URL

    <server-name>/<client-id>/<user_id>/<object-id>/<type>/<sign>/add_favorite

###Example
    
    http://pressa.ru/mobile/leeco/2/587/article/bb294aa52ecef86162b1eb9bbe78513c/delete_favorite

###Parameters

    user_id - user identifier
    object_id - object id
    type - journal|issue|article
    sign - md5(user_id,object_id,type,secret_word)


##23 Deleting object from the favorite list.

### Request URL

    <server-name>/<client-id>/<user_id>/<object-id>/<type>/<sign>/delete_favorite

###Example
    
    http://pressa.ru/mobile/leeco/2/587/article/bb294aa52ecef86162b1eb9bbe78513c/delete_favorite

###Parameters

    user_id - user identifier
    object_id - object id
    type - journal|issue|article
    sign - md5(user_id,object_id,type,secret_word)


##24 Get favorite list.

### Request URL

    <server-name>/<client-id>/<user_id>/<sign>/get_favorite

###Example
    
    http://pressa.ru/mobile/leeco/2/bc8bbccf76486083438a7bb0ae8278d2/get_favorite

###Response

    {"status": 0, "article": [587, 588], "journal": [1], "issue": [1]}



##25 Reset password.

### Request URL

    <server-name>/<client-id>/<sign>/reset_password

###POST Parameters

    user_id 
    password

###GET parameters
 
    sign - md5(<client-id><user-id><password><secret-word>)


##26 Save preference

### Request URL

    <server-name>/<client-id>/<user-id>/<sign>/save_preference

###POST Parameters

    preference - string 

    sing = md5(client-id+user-id+secret-word)

##27 GET preference

### Request URL

    <server-name>/<client-id>/<user-id>/<sign>/get_preference

    sing = md5(client-id+user-id+secret-word)










