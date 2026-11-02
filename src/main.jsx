import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { LanguageProvider } from "./components/LanguageProvider";
import { BrowserRouter} from 'react-router-dom'
// ..
AOS.init();

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import PreLoader from './components/PreLoader.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-10">
      <BrowserRouter>
        <LanguageProvider>
          <Navbar />
          <App />
          <Footer />
        </LanguageProvider>
      </BrowserRouter>
    </div>
  </StrictMode>,
)
