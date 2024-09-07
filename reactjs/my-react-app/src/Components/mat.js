import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <CardGroup >
      <Card>
        <Card.Body >
          <Card.Title>Certification</Card.Title>
          <Card.Text>
          We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Microsoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Placements</Card.Title>
          <Card.Text>
          We regularly conduct mock interviews with the help of experienced professionals. These interviews help prepare our trainees for their future placements and help them analyze and upgrade their skills accordingly.{' '}
          </Card.Text>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Product development</Card.Title>
          <Card.Text>
          Our in-house development team focuses on providing the best to our customers. Whether you're looking for a custom build product or in house automation, our products are guaranteed to help make your work easier.
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>
  );
}

export default GroupExample;