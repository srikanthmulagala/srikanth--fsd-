import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import p6 from "./img/p6.png"
import p7 from "./img/p7.png"
import p8 from "./img/p8.png"
import img from "./img/p11.png"
function Cer(){
    return(
<>
<div className='div2 container-fluid bg-white ps-5 '>
<Row className='ps-5'>
  <Col className='ps-5'>
   <h1 className='mt-5 ps-5'>Get certified</h1>
   <h3 className='text-secondary ps-5'># Ready</h3>
   <p className='ps-4 p1'>
   Technical Hub provides the trainings which are certification aligned and associated with various vendors that are top in the industry. Members who are part of this program are given a constant practical example on various topics, thus keeping them abreast of their technological world..
   </p>
  </Col>
  <Col>
 <img src={p6} className="image" alt="image"/>
  </Col>
  <Col>
 <img src={p7} className="image" alt="image"/>
  </Col>
  <Col>
 <img src={p8} className="image" alt="image"/>
  </Col>
</Row>
</div>
<div className='div4 container-fluid '>
          <Row>
            <center>
              <h3 className='hh1'>Our Learning Paths</h3>
              <span className='span1'>Competitive Coding</span>
              <span>T-Shaped Engineer</span>
              <span>Drive Ready</span>
            </center>
          </Row>
          <Row>
          <center>
          <div  id='div5'>
           <Row>
              <Col sm={6}>
               <img src={img} alt='' className='image3'></img>
              </Col>
              <Col sm={5}>
               <p className='pp1'>01</p>
                <h1 style={{textAlign:'left'}}>
                Competitive Coding
                </h1>
                <p className=' p1'>Technical Hub organizes various trainings and skill
                   enhancement programs that focuses on keeping individuals
                    up to date on various kinds of technology. These program 
                    grants everyone a chance to widen their knowledge and skills 
                    in various ways.</p>
                    <button id='btn'>View</button>
              </Col>
              <Col sm={1}></Col>
            </Row>
          </div>
          </center>
          </Row>
        </div>
</>
);
}
export default Cer;