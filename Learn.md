1. npm install react-router-dom
2. Inside app
```
import { BrowserRouter } from 'react-router-dom';

function App() {
  // ...
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```
3. Define Router
```
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return   
 (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>   

  );
}

```
4. Navigation with code
```
import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate('/');
  };

  return (
    <button onClick={handleNavigateToHome}>Go to Home</button>
  );
}

```

Route parameters

```
Using Route Parameters: