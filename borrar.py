import mysql.connector

def probar_conexion():
    try:
        conn = mysql.connector.connect(
            host='nacho00.mysql.pythonanywhere-services.com',
            user='nacho00',
            password='nacho44490362',
            database='nacho00$user'
        )
        if conn.is_connected():
            print('Conexión exitosa')
            conn.close()
    except mysql.connector.Error as err:
        print(f"Error: {err}")

probar_conexion()
