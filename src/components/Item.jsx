import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function Item ({item}) {
    return (
        <Col>
            <Row>
                <Card style={{ width: '16rem' }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.category}
                        </Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text>
                           $ {item.price}
                        </Card.Text>
                        <Button variant="primary" as={Link} to={`/item/${item.id}`}>Ver mas</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Col>
    )
}

export default Item