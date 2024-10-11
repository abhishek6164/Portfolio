// Import MantineProvider from Mantine
import { MantineProvider } from "@mantine/core";
import "./App.css";
import HomePage from "./Components/HomePage"; // Fix the typo in the 'components' directory
import "@mantine/core/styles.css";
import { pdfjs } from "react-pdf";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <MantineProvider>
        <HomePage />
      </MantineProvider>
    </>
  );
}

export default App;
