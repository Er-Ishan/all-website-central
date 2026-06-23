import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter } from 'react-router-dom'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { apiFetch } from './services/parkingApi'

const API = import.meta.env.VITE_API_URL;
const stripePromise = apiFetch(`${API}/api/payment-config`)
  .then(r => r.json())
  .then(data => data.publishable_key ? loadStripe(data.publishable_key) : null)
  .catch(() => null);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <App />
    </Elements>
  </BrowserRouter>,
  </StrictMode>
)
