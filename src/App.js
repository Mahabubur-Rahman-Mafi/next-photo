import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
  
        <RouterProvider router={router} />

    </>
  );
}

export default App;
