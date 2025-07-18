import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/global.css';
import { TabProgressProvider } from './context/TabProgressContext';
import { ThemeProvider } from './context/ThemeContext';
const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <TabProgressProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </TabProgressProvider>
  </React.StrictMode>
);