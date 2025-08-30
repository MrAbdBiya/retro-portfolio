
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mount() {
  const rootElement = document.getElementById('root');
  if (!rootElement) return setTimeout(mount, 0);
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
mount();
