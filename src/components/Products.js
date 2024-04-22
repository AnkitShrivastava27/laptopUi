import React from 'react'
import productData from '../data/productData'
import { Card, Container,Row,Col, Button } from 'react-bootstrap'
import { CurrencyRupee} from 'react-bootstrap-icons'
import "../style.css"
import { useDispatch,useSelector } from 'react-redux'
import { add } from './Actions'


const Products = () => {
    const store = useSelector(state=>state.productReducer)
    const dispatch = useDispatch()
    function addCart(data){
       dispatch(add(data))
    }
    console.log("store >>",store)
  return (
    <Container>
        <Row  >
        {
            productData.map((product,index)=>{
                return (
                    <Col xs={12} sm={6} md={4}>
                        <Card style={{ width: '18rem' }}>
                                   <Card.Img  variant="top" src={product.image} />
                                        <Card.Body>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text><CurrencyRupee />{product.price}</Card.Text>
                                            <Card.Text>{product.description}</Card.Text>
                                            <Card.Link style={{textDecoration: 'none'}}><Button onClick={()=>addCart(product)}>Add To Cart</Button></Card.Link>
                                        </Card.Body>
                                 </Card>
                            </Col>
                                  
                  
                )
            })
        }
         </Row>
    </Container>
  )
}

export default Products