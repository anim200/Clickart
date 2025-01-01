import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";
import { useEffect, useState } from "react";
import axios from "axios";
const Container=styled.div`
display: flex;
padding: 20px;
flex-wrap: wrap;
justify-content: space-between;
    
`



const Products = ({cat,filters,sort}) => {
  const [products,setProducts]=useState([]);
  const [filteredproducts,setFilteredProducts]=useState([]);
  console.log(cat);
  useEffect(()=>{
    const getProducts = async () =>{
      try{
        const res= await axios.get(cat? `https://clickart-backend.vercel.app/api/products?category=${cat}`:"https://clickart-backend.vercel.app/api/products");
        
        setProducts(res.data);
        
        


      }catch(err){
        console.log(err);
      }
    };
    getProducts();


  },[cat])
  useEffect(() => {
    cat && setFilteredProducts(
      products.filter(itm => Object.entries(filters).every(([key, value]) => {
        return itm[key].includes(value);
      }))
    );
}, [products, cat, filters]);
useEffect(()=>{
  if ((sort==="newest")) {
    setFilteredProducts(prev=>[...prev].sort((a,b)=>a.createdAt-b.createdAt))

    
  }
  else if((sort==="asc")){
    setFilteredProducts(prev=>[...prev].sort((a,b)=>a.price-b.price))


  }else{
    setFilteredProducts(prev=>[...prev].sort((a,b)=>b.price-a.price))
  
  }

},[sort])
console.log(filteredproducts);

  
  return (
    <Container>
        {cat? filteredproducts.map(item=>(
            <Product item={item} key={item.id}/>

        )) : products.map(product=>(
          <Product item={product} key={product._id}/>

      ))}

        
    </Container>
    
  )
}

export default Products
