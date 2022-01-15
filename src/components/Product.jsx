import React,{useEffect} from 'react'
import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import Aos from 'aos';
import "aos/dist/aos.css"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-top: 20px; */

    transition: all 0.5 ease;
`
const Image = styled.img`
    /* width: 100%; */
    height: 75%;
    /* object-fit: cover; */
    z-index: 2;
    transition: all 2.5s ease-in-out;

    
`
const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d7dbdf;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
    &:hover ${Image}{
        transform: rotate(360deg)
    }
    
    box-shadow: -6px 19px 19px -11px rgba(0,0,0,0.65);
    -webkit-box-shadow: -6px 19px 19px -11px rgba(0,0,0,0.65);
    -moz-box-shadow: -6px 19px 19px -11px rgba(0,0,0,0.65);

`

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #d0e3f0;
        transform: scale(1.5)
    }
    cursor: pointer;

`
const Product = ({product}) => {
    useEffect(()=>{
        Aos.init({duration: 2500});
    },[]);
    return (
        <Container data-aos="fade-up">
            <Circle />
            <Image src={product.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlinedIcon />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlinedIcon />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
