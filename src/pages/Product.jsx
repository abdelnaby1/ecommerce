import styled,{keyframes} from 'styled-components'
import {useEffect, useState} from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
// import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Select from '../components/Select/Select';
import FilterSelect from '../components/Select/FilterSelect';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Aos from 'aos';
import "aos/dist/aos.css"
import { Add, Remove } from '@mui/icons-material';

import { mobile } from '../responsive';
const  fadeInAnimation = keyframes`
     0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
const Container = styled.div`
        /* animation: ${fadeInAnimation} 1.5s ease-in; */

`

const rotate = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
      opacity: 1;
    transform: translateY(0);
  }
`;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    /* animation: ${fadeInAnimation} 1.5s ease-in; */
    ${mobile({padding:"10px",flexDirection:"column"})}

    
`
const ImgContainer = styled.div`
    flex: 1;
    
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height:"50vh"})}
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    /* transform:${props => props.shouldRender ? 'translateY(0)': 'translateY(-100%)'};
    transition: transform 2.5s ease-out; */

    ${mobile({padding:"10px"})}
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 20px 0px;
`
const Price = styled.span`
    font-weight: 600;
    font-size: 30px;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin:30px 0px ; 
    ${mobile({width:"100%"})}

`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    ${mobile({width:"100%"})}

`
const AmmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Ammount = styled.div`
    margin:0px 5px ;
    width: 35px;
    height: 35px;
    border-radius: 25%;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
     background: #e6a247;  
   border: none;  
   border-radius: 4px;  
   -webkit-box-shadow: 0 3px 13px -2px rgba(0,0,0,.15);  
   box-shadow: 0 3px 13px -2px rgba(0,0,0,.15);  
   color: #ffffff;  
   display: flex;  
   align-items: center;
   font-family: 'Ubuntu', sans-serif;  
   justify-content: space-around;  
   min-width: 195px;  
   overflow: hidden;  
   outline: none;  
   padding: 0.7rem;  
   position: relative;  
   text-transform: uppercase;  
   transition: 0.4s ease;  
   width: 100px;
   &:hover {  
     cursor: pointer;  
   }  
   &:hover,  
   &:focus {  
     -webkit-box-shadow: 0 0 0 0.2rem rgba(252, 186, 3,.45);  
     box-shadow: 0 0 0 0.2rem rgba(252, 186, 3,.45);  
     -webkit-transform: translateY(-1px);  
     transform: translateY(-1px);  
   }    
`
// const AddContainer = styled.div``



const Product = () => {
    // const [ shouldRender, setShouldRender ] = useState(false);
    // console.log(shouldRender+" outside ")

    // useEffect(() => {
    //         setShouldRender((prev)=> !prev);

    //     console.log(shouldRender)
    // }, [])
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    console.log("hi")
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer data-aos="fade-right">
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
                </ImgContainer>
                <InfoContainer data-aos="fade-left">
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>
                        <Filter>
                            {/* <FilterTitle>Size</FilterTitle> */}
                            <Select name="Size" items={['XS','S','M','L','XL']}>
                                <FilterSelect padding="10px" />
                            </Select>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmmountContainer>
                            <Remove />
                            <Ammount>1</Ammount>
                            <Add />
                        </AmmountContainer>
                        <Button><AddShoppingCartIcon />ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            
            <Newsletter  />
            <Footer />
        </Container>
    )
}

export default Product
