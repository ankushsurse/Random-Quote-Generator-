import { GlobalProvider } from "./Components/Context/GlobalContext";
import Navbar from "./Components/Navbar";
import Quotes from "./Components/Quotes";

function App() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <Quotes />
      </GlobalProvider>
    </>
  );
}

export default App;
