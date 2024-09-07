import { Col } from "react-bootstrap"
import { Row } from "react-bootstrap"
import img from "./img/logo.jpg"
function footer(){
  return(
    <div className='div8 pt-5'>
          <Row>
            <Col sm={1}></Col>
            <Col sm={3}>
            <img src={img} alt='' className='image2'></img>
            </Col>
            <Col sm={3}>
              <p style={{fontSize:"18px"}} className='ppp' >USEFUL LINKS</p>
              <ul >
                <a href='#'><li>Refund Policy</li></a>
                <a href='#'><li>Privacy Policy</li></a>
                <a href='#'><li>Terms & Conditions</li></a>
              </ul>
            </Col>
            <Col sm={3}>
              <p className='p'>GET IN TOUCH</p>
              <p className='p'>support@technicalhub.io</p>
              <p className='p'> +91 83 43 81 81 81</p>
              <p className='p'>Get latest news & updates and special promotions.</p>
              <input/><button className='btn1'>Subscribe</button>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </div>
  );
};
export default footer