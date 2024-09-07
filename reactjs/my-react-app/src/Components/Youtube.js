import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Youtube(){
    return(

<div className='div2 container-fluid bg-light ps-5 '>
<Row className='ps-5'>
  <Col className='ps-5'>
   <h1 className='mt-5 ps-5'>Technical Hub</h1>
   <h3 className='text-secondary ps-5'># Ready to hire</h3>
   <p className='ps-4 p1'>
   Founded back on the 3rd of February 2016, our journey has been quite an adventurously
   successful one. Over time our team has taken up commercial and social projects and 
    developed apps, games, softwares, websites and a whole lot more. Our experienced 
    developers are certified in an array of languages and can handle anything that comes 
    their way.
   </p>
  </Col>
  <Col>
  <div className='div3'>
    <div className='behind-overlay'></div>
    <iframe src='https://www.youtube.com/embed/FWswzxaCG3c'></iframe>
  </div>
  </Col>
</Row>
</div>
);
}
export default Youtube;