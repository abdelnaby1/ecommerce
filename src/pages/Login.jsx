import React from 'react'

import styled from 'styled-components'
import {mobile} from '../responsive';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: white;
    width: 25%;
    padding:20px;
    ${mobile({width:"75%"})}
`
const Title = styled.h1`
    font-weight: 300;
    font-size: 25px;
    text-transform: uppercase;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
`
const Input = styled.input`
     flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;    
    border:none;
    border-bottom: 1px solid #201a1a;
    margin:20px 10px 10px 0px ;
    padding-left: 0;
    &:focus{
        outline: none;
    }
`
const Button = styled.div`
margin-bottom: 10px;
    width: 30%;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>sign in</Title>
                <Form>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    
                    <Button>login</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
