import { Toaster } from "react-hot-toast";
import CounterPage from "./pages/CounterPage";

function App() {
  return (
    <>
      <CounterPage />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: "1.5rem",
          },
        }}
      />
    </>
  );
}

export default App;
