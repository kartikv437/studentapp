import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/global.css';
import { TabProgressProvider } from './pages/TabProgressContext';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <TabProgressProvider>
      <App />
    </TabProgressProvider>
  </React.StrictMode>
);