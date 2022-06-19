// Import Halaman Home
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import theme from "./components/utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import About from "./pages/mading/About";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/mading/about" element={<About />}></Route>
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
