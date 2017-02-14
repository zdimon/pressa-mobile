#Text reader API

#Releases

##Retriewing a list of the Top 10 on the released date.

###URL pattern http://pressa.ru/textAPI/top10/<date>.json

###Example http://pressa.ru/textAPI/top10/2016-01-29.json


###Output (json)

    {
        date: '20016-01-01',
        articles: [{...},{...},{

            'title': '...',
            'short_text': '...',
            'text': '...',
            'image': '...',
            'small_image': '...',
            'journal': '...',
            'issue': '...',
            'reader_url': '...',
            'order': '...'


        }]
    }




#TODO

##- Get a list of articles

###Pattern http://pressa.ru/textapi/list/<number>/<date>

URL1: http://pressa.ru/textapi/list/12/none
URL2: http://pressa.ru/textapi/list/none/02-01-2017
URL3: http://pressa.ru/textapi/list/23/02-01-2017

<number> - max number of articles
<date> - date of the release


###Output

    


###- Get the last number of articles.

###- Get the detail information about article.

###- Get the list of articles inside the issue.
     

