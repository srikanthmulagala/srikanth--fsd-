import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import p9 from "./img/tconnect.png"
import p10 from "./img/makerssquare.png"
function Cer(){
    return(

<div className='div2 container-fluid bg-light ps-5 '>
<Row className='ps-5'>
  <Col className='ps-5'>
   <h1 className='mt-5 ps-5'>Our</h1>
   <h1 className='ps-5'>Innovative Programs</h1>
   <p className='ps-4 p1'>
   Our creative minds come up with various programs to keep you entertained while you get trained. Some of our most popular programs are mentioned below.   </p>
  </Col>
  <Col>
 <img src={p9} className="image" alt="image"/>
  </Col>
  <Col>
 <img src={p10} className="image" alt="image"/>
  </Col>
</Row>
</div>
);
}
export default Cer;