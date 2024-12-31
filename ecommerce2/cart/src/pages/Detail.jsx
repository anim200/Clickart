import Navbar2 from "../components/Navbar2"
import styled from "styled-components"
import CollectionsIcon from '@mui/icons-material/Collections';
const H=styled.h1`
display: flex;
align-items: center;
justify-content: center;
margin-top: 30px;

    

`
const Container=styled.div`
display: flex;
margin-top: 40px;
    
`
const LeftContainer=styled.div`
flex:1;
    
`

const Form=styled.form`
display: flex;
flex-direction: column;


`
const Input=styled.input`
margin: 20px;


`
const Hr=styled.hr`
    height: 80vh;
`
const  PhotoContainer=styled.div`
display: flex;


    
`
const PhotoImgContainer=styled.div`
width: 15%;
border: 2px solid black;
height: 80px;
align-items: center;
justify-content: center;
margin:10px

`

const P1=styled.div`
margin-left: 13px;
font-size: 20px;

    
`
const P2=styled.div`
margin-left: 13px;
font-size: 20px;

    


`
const P3=styled.div`
margin-left: 13px;
font-size: 20px;
margin-bottom: 5px;

    


`
const P4=styled.div`
margin-left: 13px;
font-size: 20px;
margin-bottom: 5px;

    


`
const P5=styled.div`
margin-left: 13px;

`
const P6=styled.div``
const P7=styled.div``
const P8=styled.div``
const P9=styled.div``
const P10=styled.div``
const P11=styled.div`
margin-left: 13px;

`
const P12=styled.div``
const P13=styled.div``
const P14=styled.div``
const P15=styled.div``
const P16=styled.div``
const Input1=styled.input`
width: 50%;
margin-left: 13px;
border: 2px solid #ccc;
 /* Adjust the value to control the curve */
outline: none;
height: 30px;
padding:5px;
margin-bottom: 10px;

    



`
const Input2=styled.input`
width: 50%;
margin-left: 13px;
border: 2px solid #ccc;
 /* Adjust the value to control the curve */
outline: none;
height: 30px;
padding:5px;
margin-bottom: 10px;

    


`
const RightContainer = styled.div`
    margin-left: 20px;
    flex:1;
`;

const Title = styled.h1`
    margin-left: 13px;
    font-weight: bold;
    font-size: 20px;
`;

const Paragraph = styled.p`
    margin-left: 13px;
    margin:10px;
`;

const Input3 = styled.input`
    margin-right: 5px;
    padding-left: 5px;
    margin-left: 10px;
    width: 70%;
    height: 25px    ;

`;

const Button = styled.button`
    margin-right: 5px;
    height: ${props=>props.name==="btn" && "30px"};
    height: ${props=>props.name==="b" && "40px"};
    width: ${props=>props.name==="b" && "100px"};
    cursor: pointer;
`;

const CheckboxLabel = styled.label`
    margin-right: 10px;
    
`;
const Pcontainer=styled.div`
border: 3px solid gray;
width: 70%;
height: 150px;


 
    
`
const Paragraph1=styled.div`
font-size: 25px;
padding: 10px;


`
const Inp=styled.input`
    margin-top: 20px;
`
const Checkdiv=styled.div`
    margin: 10px;
`
const Btndiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;

`







const Detail = () => {
  return (
    <>
     <Navbar2/>
      <H>Give details about the product that you want to post</H>
      <Container>
        <LeftContainer>
        <Form>
    <P1 name="1">Condition</P1>
          
    <label>
      <Input type="radio" name="gender" value="male"></Input>
      Used
      <Input type="radio" name="gender" value="female"></Input>
      New
    </label>
    <P2 name="2">Authenticity</P2>
    <label>
      <Input type="radio" name="gender" value="male"></Input>
      Original
      <Input type="radio" name="gender" value="female"></Input>
      Refurbished
    </label>
    <P3>Brand</P3>
    <Input1 placeholder="Brand"></Input1>
    <P4>Model</P4>
    <Input2 placeholder="Model"></Input2>
    <P5>Add up to 5 Photos?</P5>
    <PhotoContainer>
       
        
        <PhotoImgContainer>
            <CollectionsIcon/>
            <P6>Add a photo</P6>


        </PhotoImgContainer>
        <PhotoImgContainer>
            <CollectionsIcon/>
            <P7>Add a photo</P7>


        </PhotoImgContainer>
        <PhotoImgContainer>
            <CollectionsIcon/>
            <P8>Add a photo</P8>


        </PhotoImgContainer>
        <PhotoImgContainer>
            <CollectionsIcon/>
            <P9>Add a photo</P9>


        </PhotoImgContainer>
        <PhotoImgContainer>
            <CollectionsIcon/>
            <P10>Add a photo</P10>


        </PhotoImgContainer>
       
        
        

        
        
        
      

    </PhotoContainer>
    <P11>You must atleast upload one photo</P11>
          
        </Form>
            

        </LeftContainer>
        <Hr></Hr>
        <RightContainer>
            <Title>Contact Details</Title>
            <Paragraph>Name</Paragraph>
            <Paragraph>Miftahul Islam 2004051</Paragraph>
            <Paragraph>Email</Paragraph>
            <Paragraph>u2004051@student.cuet.ac.bd</Paragraph>
            <Pcontainer>
                <Paragraph1>Add Phone Number</Paragraph1>
                <Input3 placeholder="Enter Phone Number" />
                <span><Button name="btn">Add</Button></span>
                <br></br>
                <Checkdiv>
                <input type="checkbox" id="myCheckbox" name="myCheckbox" />
                
                <CheckboxLabel htmlFor="myCheckbox">Hide Phone Number</CheckboxLabel>

                </Checkdiv>
                
            </Pcontainer>
            <Inp  type="checkbox" id="myCheckbox" name="myCheckbox" />
            <CheckboxLabel htmlFor="myCheckbox">I have read and accept the <a href="#">Terms and Conditions</a></CheckboxLabel>
            <br />
            <Btndiv>
            <Button name="b" >Post</Button>
            </Btndiv>
           
        </RightContainer>

      </Container>

    </>
   
  )
}

export default Detail
