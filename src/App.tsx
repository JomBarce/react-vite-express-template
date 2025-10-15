import { useState, useEffect } from 'react'
import './styles/App.css'
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

import Test from './components/Test';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data: { message?: string }) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setMessage('No message received');
        }
      })
      .catch((error) => {
        console.error('Error fetching message:', error);
        setMessage('Failed to load message');
      });
  }, []);

  return (
    <>
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Test />
      </main>

      <h1>{message || 'Loading...'}</h1>
      <h2>{import.meta.env.MODE}</h2>
    </>
  );
}

export default App