
import React from 'react'
import {  VStack ,  Image,Text,HStack,Button} from "@chakra-ui/react";
import { AiFillDelete } from "react-icons/ai";
import { Grid, GridItem } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const { cartItems, subTotal, tax, shipping, total } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch()
  
  const increment = (id) => {
  dispatch({
    type:"addToCart",
    payload:{id},
  })
  dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type:"decrement",
      payload:id,
    })
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type:"deleteFromCart",
      payload:id,
    })
    dispatch({ type: "calculatePrice" });
  };
  return (
    
    <Grid
    h='200px'
  templateRows='repeat(5, 1fr)'
  templateColumns='repeat(5, 1fr)'
 
  >
    <GridItem colSpan={4}>
           {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
        </GridItem>
        <GridItem >

<VStack>
<h2>Subtotal: ${subTotal}</h2>
        <h2>Shipping: ${shipping}</h2>
        <h2>Tax: ${tax}</h2>
        <h2 style={{fontWeight:'900'}}>Total: ${total}</h2>     
</VStack>

</GridItem>
</Grid>
  )
}

const CartItem = ({
    imgSrc,
    name,
    price,
    qty,
    decrement,
    increment,
    deleteHandler,
    id,
  }) => (
 <HStack m={5} bgColor={'white'} borderRadius='lg' color={'black'} justifyContent={'space-around'} alignItems={'center'}>

     <HStack>
      <Image
      src={imgSrc}
      style={{ height: "14rem" , width:"20rem"}} 
      borderRadius='lg'
      />
      <VStack>
       <Text m={4}>{name}</Text>
    
      <Text m={4}>{price}</Text>
      </VStack>
    </HStack>
    
    <HStack alignContent={'center'}>
        <Button border={'1px'} onClick={()=>increment(id)}>+</Button> 
        <Button>{qty}</Button>
        <Button border={'1px'} onClick={()=>decrement(id)}>-</Button>
        <Button><AiFillDelete onClick={()=>deleteHandler(id)}/></Button>
    </HStack>
 </HStack>
)

export default Cart