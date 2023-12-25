from flask import Flask, request, jsonify
import pandas as pd
import pickle
import numpy as np

app = Flask(__name__)

# Load the pre-trained model
with open('./demand_Forecating1', 'rb') as f:
    model = pickle.load(f)

# Load the DataFrame with the necessary preprocessing
df = pd.read_csv("clothes2.csv")
df['Date'] = pd.to_datetime(df['Date'], format='%d-%m-%Y')
df = df.dropna()
categorical_cols = ['ItemType', 'Gender', 'Sleeve', 'MaterialsUsed', 'Season']
df = pd.get_dummies(df, columns=categorical_cols)
X = df.drop(['QuantitySold'], axis=1)
X['year'] = X['Date'].dt.year
X['month'] = X['Date'].dt.month
X['day'] = X['Date'].dt.day
X = X.drop(['Date'], axis=1)

# Routes
@app.route('/')
def home():
    return "Welcome to the Demand Forecasting API!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        date = data['date']
        item_type = data['item_type']
        gender = data['gender']
        sleeve = data['sleeve']
        materials_used = data['materials_used']
        season = data['season']

        # Create a DataFrame for the input data
        input_data = pd.DataFrame({
            'Date': [pd.to_datetime(date, format='%d-%m-%Y')],
            'ItemType': [item_type],
            'Gender': [gender],
            'Sleeve': [sleeve],
            'MaterialsUsed': [materials_used],
            'Season': [season]
        })

        # Preprocess the input data
        input_data['year'] = input_data['Date'].dt.year
        input_data['month'] = input_data['Date'].dt.month
        input_data['day'] = input_data['Date'].dt.day
        input_data = pd.get_dummies(input_data, columns=categorical_cols)
        input_data = input_data.drop(['Date'], axis=1)

        # Make prediction
        prediction = model.predict(input_data)[0]

        # Convert prediction to ceiling value
        ceil_value = np.ceil(prediction)

        return jsonify({'prediction': ceil_value})

    except Exception as e:
        return jsonify({'error': str(e)})


if _name_ == '_main_':
    app.run(debug=True)