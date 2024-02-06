import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Business from "./components/business/Business";
import Service from "./components/service/Service";
import Financial from "./components/financial/Financial";

function App() {
  return (
    <div className="font-manrope">
      <Header />
      <Hero />
      <Business />
      <Service />
      <Financial />
    </div>
  );
}

export default App;
