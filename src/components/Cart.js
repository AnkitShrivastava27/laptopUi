import React from 'react'
import { CurrencyRupee } from 'react-bootstrap-icons'
import { useSelector,useDispatch } from 'react-redux'
import { Button, Container,Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { add, remove } from './Actions';

const Cart = () => {
    const store = useSelector(state=>state.productReducer)
    let newStore = [...store]
    let total = 0
    const dispatch = useDispatch()
    newStore = store.map((item)=>{
        item.total = item.price*item.proCount
        return {...item,...item.total}
    })
    for(let x of newStore){
         total = total + x.total
    }
    console.log("total ",total)
    const handleAdd = (prod)=>{
        dispatch(add(prod))
    }
    const handleDel = (prod)=>{
        dispatch(remove(prod))
    }
  return (
    <div>
        <Container>
        <h4>
            Cart
        </h4>
        <Row >
        <Col xs={12} sm={6} md={6}>
        <ol>
        
        {
            newStore.map((item,index)=>{
                return (
                    
                    <div>
                        <li key={index}>{item.name} - <CurrencyRupee />{item.price} 
                        <Button style={{marginLeft:"2rem"}} variant="outline-primary" onClick={()=>handleAdd(item)} size="sm">+</Button>&nbsp; {item.proCount} &nbsp;<Button variant="outline-primary" onClick={()=>handleDel(item)} size="sm">-</Button></li>
                        <br />
                    </div>
                    
                )
            })
        }
        
        </ol>
        </Col>
        <Col xs={12} sm={6} md={6}>
            
            <Card style={{ width: 'rem' }} >
                <Card.Body>
                    <Card.Title>Total Price In My Cart:-</Card.Title>
                    <Card.Text>
                        <ol>
                       {
                        store.map((item,index)=>{
                           return <li key={index}>{item.name} ({item.proCount})- <CurrencyRupee />{item.price*item.proCount} <br/></li>
                        })
                       }
                       </ol>
                    </Card.Text>
                    <Card.Footer >
                        Total price : <CurrencyRupee />{total}
                    </Card.Footer>
                    </Card.Body>
                </Card>
            
        </Col>
        </Row>
        </Container>
    </div>

  )
}

export default Cart