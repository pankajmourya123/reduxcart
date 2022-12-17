import { HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import '../style/header.css'
import { useSelector } from "react-redux";

const Header = () => {

  const {cartItems}=useSelector(state=>state.cart)
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} justifyContent={'space-between'} boxSizing={"border-box"}>
      
      <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag   size={'30px'}  />
         
          <p>{cartItems.length}</p>
        </Link>
     
    </HStack>
  );
};

export default Header;