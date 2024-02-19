import Header from "./templates/Header";
import Footer from "./templates/Footer";
import Producto from "./templates/Producto";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>
      <div className="contenido-principal">
        <Producto />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
