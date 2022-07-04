import "./App.css";
import MainPage from "./components/MainPage";
import Car from "./components/Car";
import Footer from "./components/Footer";
import Progress from "./components/Progress";
import Project from "./components/Project";
import About from './components/About';

function App() {
  return (
    <>
      {/* <div>
        <Navbar />
      </div> */}
      <div>
        <MainPage />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Car></Car>
      </div>
      <div>
        <Progress></Progress>
      </div>
      <div>
        <Project></Project>
      </div>

      <div style={{ marginTop: "170px" }}>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
