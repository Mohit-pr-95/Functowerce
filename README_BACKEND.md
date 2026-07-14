# Functowerce - Backend Setup Guide

## Overview
This document explains how to set up and run the Flask backend for the Functowerce project, specifically for the quadratic function calculator.

## Prerequisites
- Python 3.7 or higher
- pip (Python package manager)

## Installation Steps

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

This will install:
- **Flask** - Web framework for creating the backend API
- **Flask-CORS** - For handling Cross-Origin Resource Sharing
- **Werkzeug** - WSGI utility library for Flask

### 2. Run the Backend Server
```bash
python app.py
```

The server will start on `http://127.0.0.1:5000`

You should see output like:
```
 * Running on http://127.0.0.1:5000
 * Debug mode: on
```

## How It Works

### Frontend-Backend Communication
1. **User Input**: User enters a value for `x` in the input box on `quadratic.html`
2. **HTTP Request**: When the "Calculate" button is clicked, JavaScript sends a GET request to the backend:
   ```
   GET http://127.0.0.1:5000/calculate?n=<value>
   ```
3. **Backend Processing**: The Flask backend:
   - Receives the `n` parameter
   - Calls the `square(n)` function from `brain.py`
   - Returns the result as JSON
4. **Display Output**: JavaScript receives the response and displays the result in the output box

### API Endpoints

#### `/calculate` (GET)
Calculates the square of a given number.

**Query Parameters:**
- `n` (required): The number to square

**Example Request:**
```
GET http://127.0.0.1:5000/calculate?n=5
```

**Example Response (Success):**
```json
{
  "result": 25
}
```

**Example Response (Error):**
```json
{
  "error": "Invalid input. Please enter a valid number."
}
```

#### `/health` (GET)
Health check endpoint to verify the server is running.

**Example Request:**
```
GET http://127.0.0.1:5000/health
```

**Example Response:**
```json
{
  "status": "Backend is running"
}
```

## Testing the Backend

### Using cURL
```bash
# Test the calculate endpoint
curl "http://127.0.0.1:5000/calculate?n=7"

# Test the health endpoint
curl "http://127.0.0.1:5000/health"
```

### Using Python
```python
import requests

response = requests.get('http://127.0.0.1:5000/calculate?n=5')
print(response.json())  # {'result': 25}
```

## Integration with quadratic.html

The `quadratic.html` file is already configured to work with this backend. The JavaScript code automatically:
1. Detects the backend URL
2. Sends the input value to the `/calculate` endpoint
3. Displays the result in the output field

Simply open `quadratic.html` in your browser while the Flask server is running.

## Architecture

```
┌─────────────────────────────┐
│   quadratic.html (Frontend) │
│  - Input: x value           │
│  - Output display           │
└──────────────┬──────────────┘
               │ HTTP GET request
               │ /calculate?n=value
               ▼
┌─────────────────────────────┐
│    app.py (Flask Backend)   │
│  - Receives n parameter     │
│  - Calls square(n) from     │
│    brain.py                 │
└──────────────┬──────────────┘
               │ JSON response
               │ {"result": n²}
               ▼
┌─────────────────────────────┐
│    brain.py (Math Logic)    │
│  - square(n) function       │
│  - Returns n²               │
└─────────────────────────────┘
```

## Troubleshooting

### Port Already in Use
If port 5000 is already in use:
```bash
# Option 1: Change the port in app.py (line 31)
app.run(debug=True, port=5001)  # Use 5001 instead

# Option 2: Kill the process using port 5000
lsof -ti:5000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :5000    # Windows (to find PID)
taskkill /PID <PID> /F          # Windows (to kill)
```

### CORS Errors
The `Flask-CORS` extension handles cross-origin requests. If you see CORS errors:
1. Ensure `CORS(app)` is called in `app.py`
2. Check that the frontend is accessing the correct backend URL

### Backend Not Responding
1. Verify the server is running: `curl http://127.0.0.1:5000/health`
2. Check for syntax errors in `app.py`
3. Ensure all dependencies are installed: `pip list | grep Flask`

## Future Enhancements

You can extend this backend to support other functions from `brain.py`:
- Add endpoints for `/cube`, `/square-root`, `/sin`, `/cos`, etc.
- Add different calculation modes
- Add history/logging of calculations
- Add error handling and validation

Example for extending:
```python
@app.route('/cube', methods=['GET'])
def calculate_cube():
    n = float(request.args.get('n'))
    result = cube(n)
    return jsonify({'result': result})
```

## Production Deployment

For production, use a production WSGI server:
```bash
# Install Gunicorn
pip install gunicorn

# Run with Gunicorn
gunicorn app:app
```

For more details on deployment, refer to Flask's production deployment documentation.
