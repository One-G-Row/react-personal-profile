import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/contactsDB', methods=['POST'])
def add_contact():
    data = request.json
    sku = data['sku']
    name = data['name']
    email = data['email']
    address = data['address']
    phone = data['phone']
    comment = data['comment']

    conn = sqlite3.connect('contact.db')
    c = conn.cursor()
    c.execute("INSERT INTO contacts(sku, name, email, address, phone, comment) VALUES(?, ?, ?, ?)",
          (sku, name, email, address, phone, comment))

    conn.commit()
    conn.close()

    return jsonify({'status': 'success'}), 201

if __name__ == '__main__':
    app.run(debug=True)
