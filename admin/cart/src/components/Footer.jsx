import styled from "styled-components"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { mobile } from "../responsive";
const Container =styled.div`

display: flex;
${mobile({
    flexDirection:"column"
  })}


`
const Left =styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;



`;
const Logo=styled.h1``;
const Desc=styled.p`
margin: 20px 0px;


`;
const SocialContainer=styled.div`
display: flex;


`;
const SocialIcon=styled.h1`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color:#${props=>props.color};
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 20px;
  
`;
const Center =styled.div`
flex: 1;
padding: 20px;
${mobile({
    display:"none"
  })}



`;
const Right =styled.div`
flex: 1;
padding: 20px;
${mobile({
    backgroundColor:"#fff8f8"
  })}




`;
const Title=styled.h3`
margin-bottom: 30px;
  
`
const List=styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;

  
`
const ListItem=styled.li`
  width: 50%;
  margin-bottom: 10px;
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;


  
`
const Payment=styled.img`
width: 50%;

  
`
const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>CLICKART</Logo>
            <Desc>
            At CLICKART, we believe in the power of creativity to inspire and transform. Our platform is more than just a place to shop; its a vibrant community where artistry meets commerce. Explore our curated selection of unique products sourced from talented artisans and designers around the globe.

            </Desc>
            <SocialContainer>
                 <SocialIcon color="3B5999"><FacebookIcon/></SocialIcon>
                 <SocialIcon color="E4405F"><InstagramIcon/></SocialIcon>
                 <SocialIcon color="55ACEE"><XIcon/></SocialIcon>
                 <SocialIcon color="E60023"><PinterestIcon/></SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
          <Title>Usuful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>

        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem>
         <RoomIcon style={{marginRight:"10px"}}/> 622 Dixie Path,South Tobinchester 98336

        </ContactItem>
        <ContactItem>
          <LocalPhoneIcon style={{marginRight:"10px"}}/>+1 234 56 78
        </ContactItem>
        <ContactItem>
        <EmailIcon style={{marginRight:"10px"}}/>  animislam2000@gmail.com
        </ContactItem>

      <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>


        </Right>

    </Container>

  )
}

export default Footer
