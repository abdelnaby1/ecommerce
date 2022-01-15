import {useState} from 'react'
import styled from 'styled-components'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import {mobile} from '../responsive'
import {sliderItems} from '../date';
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;

`
const Arrow = styled.div`
    width:50px;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0.5;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px" };
    right: ${props => props.direction === "right" && "10px" };
    background-color: black;
    color: white;
    z-index: 2;
    
`
const Wrapper = styled.div`
    height:100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(-${(props)=> props.slideIndex*100}vw);
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props)=> props.bg};


`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    padding: 0 50px;
`
const Image = styled.img`
    height: 80%;
    ${mobile({backgroundSize:"cover"})}

`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 3px;
    margin: 50px 0px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    -webkit-box-shadow: 5px 5px 7px 5px #000000; 
box-shadow: 5px 5px 7px 5px #000000;
`
const Slider = () => {
    const slidCounts = sliderItems.length -1;
    const [slideIndex, setSlideIndex] = useState(0)
    const handleArrowClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex((slideIndex)=> slideIndex > 0? slideIndex -1: slidCounts)
        }else{
            setSlideIndex((slideIndex)=> slideIndex < slidCounts ? slideIndex + 1: 0)

        }
    }
    console.log(slideIndex)
    return (
        <Container>
            <Arrow direction="left" onClick={()=> handleArrowClick("left")} >
                <ArrowLeftOutlinedIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item)=> (
                <Slide bg={item.bg}>
                    <ImgContainer>
                        <Image src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>

                </Slide>
                ))}


                
            </Wrapper>
            <Arrow direction="right" onClick={()=> handleArrowClick("right")}>
                <ArrowRightOutlinedIcon />
            </Arrow>

            
        </Container>
    )
}

export default Slider
