import { ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text ,HStack,Button} from "@chakra-ui/react";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://cdn.shopify.com/s/files/1/2428/5565/products/Neemans-HaleBlack-ReLive-Knits-Jogger-FrontRightLogo-Comfortable-Shoes_1024x.jpg?v=1662876260";
const img3="https://m.media-amazon.com/images/I/41sfuIx8-ML.jpg"
const Home = () => {
  const productList = [
    {
      name: "Mac Book",
      price: 12000,
      imgSrc: img1,
      id: "asdhajsdbhjabhsjdfdfv",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: img2,
      id: "sdjfdlaajsdbhjabhsjdfdfv",
    },
    {
      name: "Phone",
      price: 5000,
      imgSrc: img3,
      id: "sdjfdlaajsdbhjabhsjsdfghjkv",
    },
  ];

  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };
  return (
    <HStack  justifyContent={'space-evenly'}>
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </HStack>
  );
}; 
const ProductCard=({ name, id, price, handler, imgSrc })=>(

    <Card maxW='sm' transition={"all 0.3s"}
      m={"4"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }} 
      objectFit={'cover'}  
      >
  <CardBody>
  <Image
      src={imgSrc}
      style={{ height: "14rem" , width:"22rem"}} 
      borderRadius='lg'
      />
    <Stack mt='7' spacing='5'>
      <Heading size='md'>{name}</Heading>
     
      <Text color='blue.600' fontSize='2xl' display={'flex'}>
      <span style={{marginRight:'5px'}}>&#8377;</span>{price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost'  onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

)
export default Home