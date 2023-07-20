import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import ThemeContextProvider from "./context/themeContexet";
function App() {

  return (
    <div className="flex flex-col gap-12 text-primary bg-primary">
      <ThemeContextProvider>
        <Header/>
        <Main/>
        <Footer/>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
