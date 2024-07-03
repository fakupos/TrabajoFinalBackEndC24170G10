class Config:
    SECRET_KEY = 'B!1w8NAt1T^%kvhUI*S^'


class DevelopmentConfig(Config):
    DEBUG = True
    MYSQL_HOST = 'nacho00.mysql.pythonanywhere-services.com'
    MYSQL_USER = 'nacho00'
    MYSQL_PASSWORD = 'nacho44490362'
    MYSQL_DB = 'nacho00$user'


config = {
    'development': DevelopmentConfig
}

#catalogo = Catalogo(host='nacho00.mysql.pythonanywhere-services.com', user='nacho00', password='nacho44490362', database='nacho00$appTP')
