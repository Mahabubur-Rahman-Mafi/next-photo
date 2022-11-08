import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  );
}

export default App;
