// Import necessary libraries and components
import { createTheme, MantineProvider } from "@mantine/core";
import "./App.css"; // Custom styles
import HomePage from "./Components/HomePage"; // Adjusted import path for consistency
import "@mantine/core/styles.css"; // Mantine core styles
import { pdfjs } from "react-pdf"; // PDF.js for rendering PDFs
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // AOS styles
import { useEffect } from "react";
import React from "react";

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init();
  }, []);
const theme = createTheme({
    breakpoints: {
      'xs': "320px",
      'sm': "476px",
      'md': "640px",
      'bs': "768px",
      'lg': "900px",
      'xl': "1024px",
      '2xl': "1280px",
    },
  });
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}

export default App;
