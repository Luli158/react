import ItemCount from "./ItemCount"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from "react-bootstrap"

function ItemDetail ({detail}){
    return(
        <Container>
            <Col>
                <img src={detail?.image} alt={detail?.title} style={{ maxWidth: '20%', height: 'auto' }} />
                <ItemCount />
            </Col>
            <Col>
                <Row><h1>{detail?.title}</h1></Row>
                <Row>{detail?.description}</Row>
            </Col>
            <ItemCount detail={detail}/>
        </Container>
        
    )
}

export default ItemDetail

