from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/api/products')
def get_products():
    response = requests.get('https://fakestoreapi.com/products')
    products = response.json()
    return jsonify(products)

if __name__ == '__main__':
    app.run()
