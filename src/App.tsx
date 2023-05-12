import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './navigation/routes';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
