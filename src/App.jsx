import RouterApp from "./router/RouterApp";
import Navbar from "./components/common/Navbar";
import "./App.css";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="bg-yellow-100 ">
      <div className="max-w-[1240px] mx-auto">
        <Navbar />
        <RouterApp />
        <Footer />
      </div>
    </div>
  );
}

export default App;
