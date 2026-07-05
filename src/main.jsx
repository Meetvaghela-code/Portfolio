import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

const consoleMessage = `
%c👋 Hello fellow developer!
%c
If you're opening the console, you probably know what you're doing. 
I put a lot of effort into designing and building this portfolio from scratch.

Feel free to take inspiration from the code and animations, but please respect the originality of the work and avoid direct cloning. 

If you want to talk about code, AI, or collaborate on a project, I'd love to hear from you! 🚀
`;

const titleStyle = 'font-size: 20px; font-weight: bold; color: #DA7756; font-family: monospace;';
const bodyStyle = 'font-size: 14px; color: #B5AFA5; font-family: monospace; line-height: 1.5;';

if (typeof window !== 'undefined') {
  console.log(consoleMessage, titleStyle, bodyStyle);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
