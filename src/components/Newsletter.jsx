import React,{useEffect} from 'react'
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import Aos from 'aos';
import "aos/dist/aos.css"
import {mobile} from '../responsive';
const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 70px;
    letter-spacing:1px;
    margin-bottom: 20px;
    ${mobile({fontSize:"50px"})}
`
const Desc = styled.div`
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({fontSize:"20px",textAlign:"center"})}

`
const InputContainer = styled.div`
    display: flex;
    width: 50%;
    height: 40px;
    background-color: white;
    justify-content: space-between;
    border:1px solid lightgray;
    ${mobile({width:"80%"})}

    
`
const Input = styled.input`
    flex: 1;
    border: none;
    padding-left: 20px;
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    flex: 0.1;
    color: white;
    border: none;
    cursor: pointer;
    background-color: teal;
`


const Newsletter = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[]);
    
    return (
        <Container  data-aos="fade-up">
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input  placeholder='Your email'/>
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
