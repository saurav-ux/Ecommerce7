import Carousel from "react-bootstrap/Carousel";
import myntra1 from "../Images/myntra1.png";
import myntra2 from "../Images/myntra2.png";
import myntra3 from "../Images/myntra3.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Crousel1() {
  return (
    <div id="crousel">
      {/* <br /> <br /> <br /> <br /> */}
      <Carousel fade id="crousel">
        <Carousel.Item>
          <img className="d-block w-100" src={myntra1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={myntra2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={myntra3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Crousel1;
