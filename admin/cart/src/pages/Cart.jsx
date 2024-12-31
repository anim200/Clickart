import styled from "styled-components"

import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Add from "@mui/icons-material/Add"
import Remove from "@mui/icons-material/Remove"
import { mobile } from "../responsive"
const Container=styled.div`

    
`
const Wrapper=styled.div`
padding: 20px;
${mobile({
    padding:"10px",

    
  })}

    
`
const   Title=styled.h1`
font-weight: 350;
text-align: center;


    
`
const Top=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

    
`

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};

color: ${props=>props.type === "filled" && "white"};

    
`
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
const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({
    flexDirection:"column",
    
    
  })}
    
`
const Info=styled.div`
flex:3;
    
`

const Product=styled.div`
display: flex;
justify-content: space-between;
height: 220px;
${mobile({
    flexDirection:"column",
    height:"30%"
    
    
  })}

`;
const ProductDetail=styled.div`
display: flex;
flex:2;

`;
const Image=styled.img`
width: 250px;
margin-top: 15px;

`;
const Details=styled.div`
display: flex;
padding: 20px;
flex-direction: column;
justify-content: space-around;


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
const   ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
${mobile({
    marginTop:"20px",
    marginBottom:"5px"
    
    
  })}


`;
const   ProductAmount=styled.div`
font-size: 24px;
margin: 5px;



`;
const   ProductPrice=styled.div`
font-size: 30px;
font-weight: 300;
${mobile({
    marginBottom:"20px",
    
    
    
    
  })}


`;
const Hr=styled.hr`
    background-color:#eee;
    border: none;
    height: 1px;
`
const Summary=styled.div`
flex: 1;
border: 0.5px solid lightgrey;
border-radius: 10px;
padding: 20px;
height: 50vh;
${mobile({
    marginTop:"40px",
    
    
  })}



`;
const SummaryTitle=styled.h1`
font-weight: 300;




`;
const SummaryItem=styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;



`;
const SummaryItemText=styled.span`

font-weight: ${props=>props.type==="total" && "bold"};
font-size: ${props=>props.type==="total" && "24px"};
`;
const SummaryItemPrice=styled.span``;
const SummaryButton=styled.button`
width: 100%;
padding: 10px;
background-color: teal;
border: none;
color: white;
font-weight: 600;
cursor: pointer;

`;






const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
           <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText >Your Wishlist</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>

            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="file10.png"/>
                            <Details>
                                <ProductName><b>Product:</b> JESSIE THUNDER SHOE</ProductName>
                                <ProductId></ProductId>
                                <ProductName><b>ID:</b>97523</ProductName>
                                <ProductColor color="black"/>
                                <ProductSize><b>Size:</b>37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                             </ProductAmountContainer>
                             <ProductPrice>
                                $ 10
                             </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src="file2.png"/>
                            <Details>
                                <ProductName><b>Product:</b> HAKURA TSHIRT</ProductName>
                                <ProductId></ProductId>
                                <ProductName><b>ID:</b>67543</ProductName>
                                <ProductColor color="gray"/>
                                <ProductSize><b>Size:</b>M</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                             <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                             </ProductAmountContainer>
                             <ProductPrice>
                                $ 30
                             </ProductPrice>
                        </PriceDetail>
                    </Product>

                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>
                            Subtotal
                        </SummaryItemText>
                        <SummaryItemPrice>

                            $ 40
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

                            $ 40
                        </SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>

                    
                </Summary>
            </Bottom>

           </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
