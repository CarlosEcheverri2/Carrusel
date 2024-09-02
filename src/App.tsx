import "./App.css";
import Carousel from "./components/newCarrucel/carousel";
import img1 from "./assets/carrucel/1.png";
import img2 from "./assets/carrucel/2.png";
import img3 from "./assets/carrucel/3.png";
import img4 from "./assets/carrucel/4.png";
import img5 from "./assets/carrucel/5.png";
import img6 from "./assets/carrucel/6.png";
import img7 from "./assets/carrucel/7.png";
import img8 from "./assets/carrucel/8.png";
import img9 from "./assets/carrucel/9.png";

function App() {
  return (
    <>
      <Carousel>
        <img src={img1} alt="Image 1" />
        <img src={img2} alt="Image 2" />
        <img src={img3} alt="Image 3" />
        <img src={img4} alt="Image 4" />
        <img src={img5} alt="Image 1" />
        <img src={img6} alt="Image 2" />
        <img src={img7} alt="Image 3" />
        <img src={img8} alt="Image 4" />
        <img src={img9} alt="Image 4" />
      </Carousel>
    </>
  );
}

export default App;
