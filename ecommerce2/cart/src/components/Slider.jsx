import styled from 'styled-components';
import ArrowLeftTwoToneIcon from '@mui/icons-material/ArrowLeftTwoTone';
import ArrowRightTwoToneIcon from '@mui/icons-material/ArrowRightTwoTone';
import { mobile } from '../responsive';
import { sliderItems } from '../../data';
import { useState } from 'react';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({
    display: "none"
  })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: transform 1.5s ease; /* Smooth transition */
  transform: translateX(${props => props.slideIndex * -100}vw); /* Apply translateX to slide the content */
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${props => props.bg};
`;

const ImgCnt = styled.div`
  height: 100%;
  flex: 1;
`;

const InfoCnt = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Image = styled.img`
  height: 80%;
  margin-left: 30%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    setSlideIndex(prev => {
      if (direction === "left") {
        return prev > 0 ? prev - 1 : sliderItems.length - 1; // Loop back to the last slide
      } else {
        return prev < sliderItems.length - 1 ? prev + 1 : 0; // Loop back to the first slide
      }
    });
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftTwoToneIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImgCnt>
              <Image src={item.img} alt={item.title} style={{ marginLeft: item.marginLeft }} />
            </ImgCnt>
            <InfoCnt>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              
            </InfoCnt>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightTwoToneIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;


