import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import p1 from './img/ps.png'
import p2 from './img/dr_c.png'
import p3 from './img/vlsi.png'
function GroupExample() {
  return (
    
    <CardGroup style={{'padding':'100px','backgroundColor':'whitesmoke'} } >
      <Card style={{'marginRight':'30px'}}>
        <Card.Img variant="top" src={p1} />
        <Card.Body >
          <Card.Title>Project Space</Card.Title>
          <Card.Text>
          Project space is a feature rich environment designed to encourage individuals to develop and showcase real-time problems and further find effective solutions that can help overcome them. Every individual who chooses to utilize this space pockets themselves a chance that could possibly get them one step closer to their dream job.

          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card style={{'marginRight':'30px'}}>
        <Card.Img variant="top" src={p2} />
        <Card.Body>
          <Card.Title>Drive Ready Connect</Card.Title>
          <Card.Text>
          Explore the realm of cutting-edge technologies all in one spot at DRIVE READY CONNECT, exclusively designed for our trainees. Stay engaged and enjoy an unparalleled learning journey with the training provided by Technical Hub. Witness the 20+ technologies at one place and its featured explained by our certified trainees of the respective technologies.

{' '}
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card >
        <Card.Img variant="top" src={p3} />
        <Card.Body>
          <Card.Title>VLSI</Card.Title>
          <Card.Text>
          Learning VLSI (Very Large Scale Integration) is paramount for students as it introduces them to a transformative technology with vast implications for our digital future. VLSI serves as the backbone of modern electronics, influencing everything from smartphones to smart home devices Acquiring expertise in VLSI not only opens doors to dynamic and in-demand career opportunities in semiconductor design and manufacturing but also positions students at the forefront of technological innovation.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default GroupExample;