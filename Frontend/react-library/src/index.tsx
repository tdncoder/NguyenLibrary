import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import {BrowserRouter} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const stripePromise = loadStripe('sk_test_51OUpGxGlvWLQzwAXXkT8fwElK43tCm86mjB9F8iS2pzYdyHA5vIcDFvMjZs1gyqzFOGiNqsdN2zmAgbH0xQ4bqgB005Npk7XCh');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </BrowserRouter>
);
