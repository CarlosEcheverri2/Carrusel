import { Carousel } from "antd";
import acuario from "../../assets/imagens/acuario.png";
import afrodita from "../../assets/imagens/afrodita.png";
import atenea from "../../assets/imagens/atenea.png";
import cat from "../../assets/imagens/cat.png";
import elis from "../../assets/imagens/elis.png";
import yashina from "../../assets/imagens/yashina.png";
import "./carruselAntD.css";

const CarruselAntD = () => {
  return (
    <div className="container">
      <Carousel dots={false}>
        <div id="elements">
          <img className="item" src={acuario} alt="" />

          <img className="item" src={afrodita} alt="" />

          <img className="item" src={atenea} alt="" />

          <img className="item" src={cat} alt="" />

          <img className="item" src={elis} alt="" />

          <img className="item" src={yashina} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarruselAntD;
