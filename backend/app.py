from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World'

@app.route('/api')
def api_data():
    data = {
        'message': 'This is a sample API response',
        'From': 'Mehul Kher',
        'via': 'Flask',
        'status': 'success'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=8000, host='0.0.0.0', debug=True)