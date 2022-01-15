import React from 'react'

import { mobile } from '../responsive'
import styled from 'styled-components'
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: white;
    width: 40%;
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
    flex-wrap: wrap;
    /* justify-content: space-between; */
`
const Input = styled.input`
    flex: 1;
    /* width: 45%; */
    min-width: 45%;
    padding:10px ;
    border:none;
    border-bottom: 1px solid #201a1a;
    margin:20px 10px 0px 0px ;
    padding-left: 0;
    &:focus{
        outline: none;
    }
`
const Agreement = styled.span`
    margin: 20px 0px;
    /* font-weight:200; */
    font-size: 12px;
`
const Button = styled.div`
    width: 40%;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>create an account</Title>
                <Form>
                <   Input placeholder="name" />
                    <Input placeholder="last name" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
