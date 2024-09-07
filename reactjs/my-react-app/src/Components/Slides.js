import Carousel from 'react-bootstrap/Carousel';
import p1 from './img/p4.png'
import p2 from './img/p5.png'
import p3 from  './img/p3.jpg'
function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p1}
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={p3}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;