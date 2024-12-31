import styled from "styled-components"
import { mobile } from "../responsive"
const Container=styled.div`
width: 100vw;
height: 100vh;
display: flex;
position: relative;


background-color: lightgrey;
${mobile({
    position:"relative",
    backgroundColor:"lightgrey"
  })}

`
const WrapperContainer=styled.div`
flex:2;
display: flex;
margin-top: 10%;
justify-content: center;
padding: 20px;
${mobile({
    
    flex:"0",
    zIndex:"2",
    marginLeft:"5%",
    marginTop:"35%"


  })}

`
const Wrapper=styled.div`
background-color: white;
width: 50%;
height: 80%;
${mobile({
    width:"20rem",
    height:"35rem",
    
    
    
  })}





`
const Form=styled.form`
display: flex;
flex-wrap: wrap;
${mobile({
    
    display:"flex",
    flexDirection:"column"
   })}

`
const Title=styled.h1`
font-size: 24px;
font-weight: 300;
padding-left: 25%;
padding-top: 3%;
margin-bottom: 10px;
${mobile({
    
   fontSize:"20px",
   paddingLeft:"20%"

   })}


`
const Input = styled.input`
  flex: 1;
  min-width: 25%;
  
  padding: 10px;
  margin: 10px;
 
 
`;

const Agreement=styled.span`
font-size: 12px;
margin: 20px 0px;
padding: 5px;

`
const Button=styled.button`
width: 40%;
border: none;
padding: 15px 20px;
margin-left: 15px;
background-color: teal;
color: white;
cursor: pointer;

`
const ImageWrapper=styled.div`
flex: 1;
${mobile({
    
   backgroundColor:"lightgray",
    flex:"1",
    width: "30px",
    display:"none"
    
  })}


`
const Image=styled.img`
    height: 100%;
    ${mobile({
    marginRight:"100%",
    width: "500px",
    
    
    zIndex:"1",
    display:"none"
    
  })}
`
const SiteTitle=styled.h1`
position: absolute;
top: 10%;
font-size: 50px;
${mobile({
    position:"absolute",

    

    
  })}

    
`
    



const Register = () => {
  return (
   <Container>
    <WrapperContainer>
    <SiteTitle>FERIWALA</SiteTitle>
    <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
            <Input placeholder="name" />
            <Input placeholder="last name"/>
            <Input placeholder="username"/>
            <Input placeholder="email"/>
            <Input placeholder="password"/>
            <Input placeholder="confirm password"/>
            <Agreement>
                By creating an account,I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>

            </Agreement>
            <Button>CREATE</Button>
        </Form>
      
    </Wrapper>
    </WrapperContainer>
  
    <ImageWrapper>
      <Image src="Daco.png"/>
    </ImageWrapper>
   </Container>
  )
}

export default Register
