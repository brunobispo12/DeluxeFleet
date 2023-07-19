import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {

  return (
    <div className="flex flex-col gap-12">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
