import React from 'react'

import styled from 'styled-components'
import Contact from './Contact'
import SoialLinks from './SoialLinks'
import {mobile} from '../responsive';

const Container = styled.div`
    display: flex;
    /* background-color: gray; */
    /* height: 150px; */
    ${mobile({flexDirection:"column",postion:"relative",bottom:"0px"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    font-size: 40px;
    /* margin-bottom: 10px; */
`
const Desc = styled.p`
    font-weight: 300;
    margin: 20px 0;
    /* align-items: center; */
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display:"none"})}
    
`
const Title = styled.h3`
    margin-bottom: 20px;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;

    
`
const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor:"#ebeaea"})}
    
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
            <Logo>E4try</Logo>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SoialLinks />
            </Left>
            <Center>
                <Title>User Links</Title>
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
                <Contact />
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

            </Right>
            
        </Container>
    )
}

export default Footer
