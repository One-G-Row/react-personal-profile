import sqlite3

con = sqlite3.connect('contact.db')
cur = con.cursor()

cur.execute('''CREATE TABLE IF NOT EXISTS contacts
            (sku text, name text, email text, address text, phone number, comment text)''')

""" cur.execute('''INSERT INTO contacts VALUES
            ('SKU1234', 'Black Logo Tshirt', 'Medium', '24.99')''') """


con.commit()

for row in cur.execute('''SELECT * FROM tshirts'''):
    print(row)




