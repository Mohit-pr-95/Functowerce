# Functowerce 📐

> **Learn mathematical functions in a comprehensive, interactive, and visual way**

A full-stack educational platform designed to demystify mathematical functions through interactive visualizations, live calculators, and detailed explanations. Perfect for students, educators, and mathematics enthusiasts.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/Mohit-pr-95/Functowerce?style=social)](https://github.com/Mohit-pr-95/Functowerce)
[![Live Demo](https://img.shields.io/badge/Demo-Live-brightgreen)](https://mohit-pr-95.github.io/Functowerce/)

---

## 🎯 Features

### 📚 Educational Content
- **Comprehensive Function Theory**: Detailed explanations of mathematical function concepts
- **Historical Context**: Learn the evolution and background of mathematical functions
- **Use Cases**: Real-world applications of different function types
- **Citations & References**: Academic sources and footnotes for credibility

### 🎨 Interactive Visualizations
- **Set Mapping Visualizer**: See how domain elements map to codomain elements (X → Y)
- **Interactive Function Grapher**: Plot multiple function types with real-time updates
- **Dynamic Point Tracking**: Track coordinates as you move along the graph
- **Grid & Axis System**: Professional mathematical visualization with coordinate labels

### 🧮 Live Calculator
- **Quadratic Function Calculator**: Compute f(x) = x² with instant results
- **Backend Integration**: Powered by a Flask API running on Render
- **Real-time Processing**: Fast computation and response times

### 🗂️ Function Library
- **Quadratic Function**: f(x) = x² (Fully implemented with calculator)
- **Greatest Integer Function**: f(x) = [x] (Coming soon)
- **Fractional Part Function**: f(x) = {x} (Coming soon)
- **Trigonometric Functions**: Sine, Cosine, and more (Coming soon)

---

## 🏗️ Project Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    FUNCTOWERCE PLATFORM                      │
└──────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│       Frontend (GitHub Pages)           │
│  HTML | CSS | JavaScript | Canvas       │
│                                         │
│  • index.html - Main page               │
│  • quadratic.html - Calculator page     │
│  • style.css - Styling                  │
│  • script.js - Interactive features     │
└────────────┬────────────────────────────┘
             │ HTTP Requests
             │
             ▼
┌─────────────────────────────────────────┐
│    Backend API (Hosted on Render)       │
│           Flask + Python                │
│                                         │
│  • brain.py - Mathematical functions    │
│  • /calculate endpoint                  │
│  • /health endpoint                     │
└────────────┬────────────────────────────┘
             │ JSON Responses
             │
             ▼
┌─────────────────────────────────────────┐
│     Math Computation Engine             │
│  square(n), cube(n), trigonometry, etc  │
└─────────────────────────────────────────┘
```

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6) | User interface & interactivity |
| **Visualization** | HTML5 Canvas, SVG | Function graphs & set mappings |
| **Backend** | Python 3, Flask | API endpoints & calculations |
| **Hosting** | GitHub Pages (Frontend), Render (Backend) | Deployment |
| **CORS** | Flask-CORS | Cross-origin resource sharing |

---

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.7+ (for local backend development)
- pip (Python package manager)

### Option 1: View Live Demo
Simply visit the GitHub Pages deployment to explore the interactive platform:
```
https://mohit-pr-95.github.io/Functowerce/
```

### Option 2: Local Frontend Setup
1. Clone the repository:
```bash
git clone https://github.com/Mohit-pr-95/Functowerce.git
cd Functowerce
```

2. Open in your browser:
```bash
# Using Python's built-in server
python -m http.server 8000

# Then visit: http://localhost:8000
```

### Option 3: Full Local Setup (Frontend + Backend)

#### Backend Setup
1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Start the Flask server:
```bash
python brain.py
```

Expected output:
```
 * Running on http://127.0.0.1:5000
 * Debug mode: on
```

3. Open the frontend in your browser while the backend is running:
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/quadratic.html` to test the calculator.

---

## 📖 How to Use

### 1. Main Page (index.html)
- Read comprehensive information about mathematical functions
- Explore the **Set Mapping Visualizer** to understand domain-codomain relationships
- Use the **Interactive Grapher** to plot different functions:
  - Linear: f(x) = x
  - Quadratic: f(x) = x²
  - Sine: f(x) = sin(x)
  - Exponential: f(x) = 2ˣ
- Browse the function library and discover more function types

### 2. Quadratic Function Page (quadratic.html)
- Enter a value in the input field
- Click "Calculate" to compute f(x) = x²
- View the result instantly (powered by the backend API)
- The result is sent from the Flask server running on Render

### 3. Interactive Features
- **Hover over domain elements** in the Set Mapping tab to see the relationship
- **Drag the slider** in the Interactive Grapher to explore different x values
- **Select different functions** to compare their behavior
- **Click citations** to highlight corresponding footnotes

---

## 🔧 API Documentation

### Backend Endpoints

#### `/calculate` (GET)
Computes the square of a given number.

**Request:**
```http
GET http://backend-url.com/calculate?n=5
```

**Query Parameters:**
| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| n | float | Yes | The number to square |

**Response (Success - 200):**
```json
{
  "result": 25
}
```

**Response (Error - 400):**
```json
{
  "error": "Invalid number format"
}
```

**Examples:**
```bash
# Using cURL
curl "http://127.0.0.1:5000/calculate?n=7"
# Returns: {"result": 49}

# Using JavaScript Fetch
fetch('http://127.0.0.1:5000/calculate?n=3')
  .then(res => res.json())
  .then(data => console.log(data.result)); // 9
```

#### `/health` (GET)
Health check endpoint to verify the backend server is running.

**Request:**
```http
GET http://backend-url.com/health
```

**Response:**
```json
{
  "status": "Backend is running"
}
```

---

## 📁 Project Structure

```
Functowerce/
├── index.html              # Main educational page
├── quadratic.html          # Quadratic function calculator
├── index2.html             # Alternative layout (archive)
├── style.css               # Global styling (69% of codebase)
├── script.js               # Interactive features & DOM manipulation
├── brain.py                # Flask backend & mathematical functions
├── requirements.txt        # Python dependencies
├── README.md               # This file
├── README_BACKEND.md       # Backend-specific documentation
└── __pycache__/           # Python cache directory
```

### Key Files Explained

| File | Size | Purpose |
|------|------|---------|
| **style.css** | 30.2 KB | Comprehensive styling for responsive design |
| **index2.html** | 57.7 KB | Enhanced layout with additional features |
| **quadratic.html** | 27.7 KB | Interactive calculator for quadratic functions |
| **script.js** | 12.0 KB | Navigation, visualizations, and grapher logic |
| **brain.py** | 1.9 KB | Flask backend with math computation |

---

## 🎨 Features in Detail

### Interactive Set Mapping
- Visualize how each element in domain X maps to exactly one element in codomain Y
- Hover interactions highlight the relationship
- Beautiful cubic Bezier curves show the mapping paths
- Responsive design adapts to window resizing

### Function Grapher
- Plot mathematical functions on an interactive HTML5 Canvas
- Real-time coordinate tracking with sliders
- Grid and axis system with labeled coordinates
- Four pre-built functions (linear, quadratic, sine, exponential)
- Zoom functionality with projection guidelines

### Responsive Design
- Mobile-friendly layout with hamburger menu
- Sidebar navigation drawer
- Profile dropdown modal
- Fully accessible UI with semantic HTML and ARIA labels

---

## 🔌 Backend Integration

The frontend communicates with the Flask backend via HTTP GET requests:

```javascript
// From script.js / quadratic.html
fetch(`http://backend-url.com/calculate?n=${userInput}`)
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      console.error(data.error);
    } else {
      displayResult(data.result);
    }
  })
  .catch(error => console.error('Fetch error:', error));
```

The backend processes requests using Flask and returns JSON responses with calculated results.

---

## 🚢 Deployment

### Frontend Deployment (GitHub Pages)
The frontend is automatically deployed via GitHub Pages:
```
GitHub Repository → GitHub Pages → https://mohit-pr-95.github.io/Functowerce/
```

### Backend Deployment (Render)
The backend is hosted on Render:
- **Platform**: render.com
- **Runtime**: Python 3
- **Framework**: Flask
- **Status**: Production server running

To update the backend, modify `brain.py` and push to the private Server repository.

---

## 📚 Mathematical Functions Library

The `brain.py` module includes:

```python
# Basic Operations
square(n)              # n²
cube(n)                # n³
square_root(n)         # n^(1/2)
power(a, b)            # a^b
fact(n)                # n! (factorial)
box(n)                 # ⌊n⌋ (greatest integer/floor)

# Trigonometric Functions (Trigonometry class)
sin(theta)             # sine
cos(theta)             # cosine
tan(theta)             # tangent
cosec(theta)           # cosecant
sec(theta)             # secant
cot(theta)             # cotangent
```

---

## 🛠️ Development Guide

### Adding a New Function

1. **Add the math function to `brain.py`:**
```python
def new_function(n):
    # Your computation here
    return result
```

2. **Create a new Flask endpoint:**
```python
@app.route('/new-endpoint', methods=['GET'])
def calculate_new():
    n_param = request.args.get('n', '')
    try:
        n_value = float(n_param)
        result_value = new_function(n_value)
        response = jsonify({"result": result_value})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response
    except ValueError:
        response = jsonify({"error": "Invalid number format"})
        response.headers.add("Access-Control-Allow-Origin", "*")
        return response, 400
```

3. **Create HTML page with calculator UI**

4. **Add JavaScript fetch call:**
```javascript
fetch(`http://backend-url.com/new-endpoint?n=${value}`)
  .then(res => res.json())
  .then(data => updateUI(data));
```

### Extending the Grapher
Add new functions to the `mathFunctions` object in `script.js`:
```javascript
mathFunctions = {
  linear: (x) => x,
  quadratic: (x) => x * x,
  new_function: (x) => /* computation */
};
```

---

## 🐛 Troubleshooting

### Backend Connection Issues
- Verify the backend is running: `curl http://127.0.0.1:5000/health`
- Check CORS headers are being set in Flask
- Ensure the correct backend URL is in the frontend code

### Calculator Not Working
- Confirm the Flask server is started
- Check browser console for error messages (F12)
- Verify network requests in DevTools (Network tab)
- Test with cURL: `curl "http://127.0.0.1:5000/calculate?n=5"`

### Port Already in Use
```bash
# On macOS/Linux
lsof -ti:5000 | xargs kill -9

# On Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Grapher Not Displaying
- Ensure JavaScript is enabled
- Check browser console for errors
- Verify canvas element exists in HTML
- Clear browser cache and reload

---

## 📋 Requirements

**Frontend:**
- Modern browser with ES6 support
- HTML5 Canvas support
- SVG support

**Backend:**
- Python 3.7+
- Flask
- Gunicorn (for production)

```bash
# Install Python dependencies
pip install -r requirements.txt
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to help:

1. **Report Issues**: Found a bug? [Open an issue](https://github.com/Mohit-pr-95/Functowerce/issues)
2. **Suggest Features**: Have an idea? [Create a feature request](https://github.com/Mohit-pr-95/Functowerce/issues)
3. **Submit Pull Requests**: 
   - Fork the repository
   - Create a feature branch (`git checkout -b feature/YourFeature`)
   - Commit changes (`git commit -m 'Add YourFeature'`)
   - Push to branch (`git push origin feature/YourFeature`)
   - Open a Pull Request

---

## 📊 Language Composition

The project utilizes multiple technologies:

| Language | Percentage | Purpose |
|----------|-----------|---------|
| **HTML** | 69.3% | Page structure & content |
| **CSS** | 21.0% | Styling & responsive design |
| **JavaScript** | 8.4% | Interactivity & visualizations |
| **Python** | 1.3% | Backend API & computations |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Mohit Pandey**
- GitHub: [@Mohit-pr-95](https://github.com/Mohit-pr-95)
- Project: [Functowerce](https://github.com/Mohit-pr-95/Functowerce)

---

## 🙏 Acknowledgments

- Mathematical content sourced from Wikipedia and academic references
- Flask framework for backend development
- HTML5 Canvas API for interactive graphing
- GitHub Pages for frontend hosting
- Render.com for backend hosting

---

## 📞 Support & Contact

For questions, suggestions, or bug reports:
- 🐛 [Report an Issue](https://github.com/Mohit-pr-95/Functowerce/issues)
- 💬 [Start a Discussion](https://github.com/Mohit-pr-95/Functowerce/discussions)
- 📧 Check the repository for contact information

---

## 🗺️ Roadmap

- [ ] Implement greatest integer function
- [ ] Add fractional part function
- [ ] Create trigonometric function visualizer
- [ ] Add function composition feature
- [ ] Implement inverse function calculator
- [ ] Add user progress tracking
- [ ] Create comprehensive function encyclopedia
- [ ] Support for calculus operations
- [ ] Mobile app version
- [ ] Multi-language support

---

## 📚 Additional Resources

- [Backend Setup Guide](README_BACKEND.md)
- [Mathematical Functions Concepts](https://en.wikipedia.org/wiki/Function_(mathematics))
- [Flask Documentation](https://flask.palletsprojects.com/)
- [HTML5 Canvas Guide](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

---

**Made with ❤️ for mathematics enthusiasts and learners everywhere.**

---

*Last Updated: 2026*
