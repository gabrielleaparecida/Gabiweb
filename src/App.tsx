import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "styles/GlobalStyle";
import Routes from "routes";
import { AuthProvider } from "Contexts/authContext";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;