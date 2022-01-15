import React,{useEffect} from 'react'
import styled from 'styled-components';

import Aos from 'aos';
import "aos/dist/aos.css"
import {mobile} from '../responsive'

const Container = styled.div`
    flex: 1;
    margin:3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    ${mobile({height:"30vh"})}
`
const Info =styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    

`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item,fade}) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    console.log({fade})
    return (
        <Container data-aos={`fade-${fade}`}>
            <Image src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
