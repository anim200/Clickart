import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import { mobile } from "../responsive"
import { useSelector } from "react-redux"
import StripeCheckout from "react-stripe-checkout"
import { useEffect, useState } from "react"
//import { userRequest } from "../requestMethod"

import { useNavigate } from 'react-router-dom';
import axios from "axios"

const Container=styled.div`

    
`
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding: "10px",
  })}
`;
const Title = styled.h1`
  font-weight: 350;
  text-align: center;
  ${mobile({
    fontSize: "20px",
  })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    flexDirection: "column",
    alignItems: "flex-start",
  })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) => (props.type === "filled" ? "black" : "transparent")};
  color: ${(props) => props.type === "filled" && "white"};
  ${mobile({
    width: "100%",
    marginBottom: "10px",
  })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const TopTexts=styled.div`
${mobile({
    display:"none",
    
    
  })}

    
`
const TopText=styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px; 


    
`

const Info=styled.div`
flex:3;
    
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  height: 220px;
  ${mobile({
    flexDirection: "column",
    height: "auto",
    marginBottom: "20px",
  })}
`;

const ProductDetail = styled.div`
  display: flex;
  flex: 2;
  ${mobile({
    flexDirection: "column",
  })}
`;

const Image = styled.img`
  width: 250px;
  margin-top: 15px;
  ${mobile({
    width: "100%",
    marginTop: "10px",
  })}
`;
const Details = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({
    padding: "10px",
  })}
`;
const ProductName=styled.span``;
const ProductId=styled.span``;
const ProductColor=styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};

`;
const ProductSize=styled.span``;
const PriceDetail=styled.span`
flex:1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


   
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({
    marginBottom: "10px",
  })}
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({
    fontSize: "18px",
  })}
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
  ${mobile({
    fontSize: "20px",
  })}
`;

const Hr=styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({
    marginTop: "20px",
    height: "auto",
    padding: "10px",
  })}
`;

const SummaryTitle = styled.h1`
  font-weight: 300;
  ${mobile({
    fontSize: "18px",
  })}
`;


const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "10px 0px",
  })}
`;

const SummaryItemText = styled.span`
  font-weight: ${(props) => props.type === "total" && "bold"};
  font-size: ${(props) => props.type === "total" && "24px"};
  ${mobile({
    fontSize: (props) => (props.type === "total" ? "18px" : "14px"),
  })}
`;
const SummaryItemPrice=styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: teal;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  ${mobile({
    padding: "8px",
  })}
`;





const Cart = () => {
    

    const cart= useSelector(state=>state.cart);
    const [imageSrcs, setImageSrcs] = useState({});
    
    
    const [stripeToken,setStripeToken]=useState(null);
    
    const navigate = useNavigate();
    const onToken=(token)=>{
        setStripeToken(token);

    }
    function handleClick() {
        navigate("/success");
      }
      useEffect(() => {
        const makeRequest = async () => {
          try {
            // First, make the payment request
            const res = await axios.post("https://clickart-backend.vercel.app/api/checkout/payment", {
              tokenId: stripeToken.id,
              amount: cart.total * 100, // Stripe requires the amount in cents
            });
    
            // Once payment is successful, place the order
            const orderData = {
              userId: cart.products[0]._id,
              products: cart.products,
              amount: cart.total,
              address: "shipping_address",  // Replace with actual address
            };
    
            // Send order data to the backend after successful payment
            await axios.post("https://clickart-backend.vercel.app/api/orders", orderData);
    
            handleClick();  // Navigate to success page after placing the order
          } catch (err) {
            console.log(err);
          }
        };
    
        // Only proceed if the stripeToken exists
        if (stripeToken) {
          makeRequest();
        }
      }, [stripeToken, cart.total]);
      useEffect(() => {
        const checkImages = async () => {
          const newImageSrcs = {};
    
          for (const product of cart.products) {
            const backendImageUrl = `http://localhost:5000${product.img}`;
            try {
              const response = await fetch(backendImageUrl);
              if (response.ok) {
                newImageSrcs[product._id] = backendImageUrl; // Use backend image
              } else {
                newImageSrcs[product._id] = `/images/${product.img}`; // Fallback image
              }
            } catch (err) {
              console.error("Error fetching backend image:", err.message);
              newImageSrcs[product._id] = `/images/${product.img}`; // Fallback image
            }
          }
    
          setImageSrcs(newImageSrcs);
        };
    
        checkImages();
      }, [cart.products]);
      console.log(imageSrcs)
  return (
    <Container>
        <Navbar/>
        <Announcement/>
           <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                
                

            </Top>
            <Bottom>
                <Info>
                {cart.products.map((product) => (
    <Product key={product._id}>
        <ProductDetail>
        <Image src={`/images/${product.img}`} />

            <Details>
                <ProductName><b>Product:</b>{product.title}</ProductName>
                <ProductId><b>ID:</b>{product._id}</ProductId>
                <ProductColor color={product.color}/>
                <ProductSize><b>Size:</b>{product.size}</ProductSize>
            </Details>
        </ProductDetail>
        <PriceDetail>
            <ProductAmountContainer>
                <Add/>
                <ProductAmount>{product.quantity}</ProductAmount>
                <Remove/>
            </ProductAmountContainer>
            <ProductPrice>
                $ {product.price * product.quantity}
            </ProductPrice>
        </PriceDetail>
    </Product>
))}

                    <Hr/>
                    
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Subtotal
                        </SummaryItemText>
                        <SummaryItemPrice>

                            $ {cart.total}
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Estimated Shipping
                        </SummaryItemText>
                        <SummaryItemPrice>

                            $ 5.90
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>
                            Shipping Discount
                        </SummaryItemText>
                        <SummaryItemPrice>

                            $ -5.90
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">
                            Total
                        </SummaryItemText>
                        <SummaryItemPrice>

                            $ {cart.total}
                        </SummaryItemPrice>
                    </SummaryItem>
                    <StripeCheckout
    name="Clickart"
    
    billingAddress
    shippingAddress
    description={`Your total is $${cart.total}`}
    amount={cart.total * 100}
    token={onToken}
    stripeKey="pk_test_51P6IYO08tWv2zF309AUx3PfLF6b7XGPnSOjVNfKwUZqXS1ek3jl9cz0kcGrrPH1seePQShoh5Oa3XLaetaLh2D4800tV6lmEoq"
>
    <SummaryButton>Checkout Now</SummaryButton>
</StripeCheckout>


                    
                </Summary>
            </Bottom>

           </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
