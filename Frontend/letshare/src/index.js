import React from "react";
import "./index.css";
import { createRoot } from 'react-dom/client';
import App from "./App";

// Create a root instance
const root = createRoot(document.getElementById('root'));

// Use the root instance to render your app
root.render(<App />);