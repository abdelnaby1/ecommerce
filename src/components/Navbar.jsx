import React,{useRef, useState} from 'react'
import styled,{keyframes} from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import { Badge } from '@mui/material';
import {mobile} from '../responsive';
const Conatainer = styled.div`
    height: 60px;
    /* background-color: red; */
    border-bottom: 4px solid #e1dfdf;
    ${mobile({height:"50px"})};

    
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({padding:"10px 0px"})};

`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.div`
    font-size: 14px;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 15px;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border:${(props)=> props.toggelInput?'0.5px solid lightgray':' '};
    /* background-color: red; */
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-flow:${(props)=> props.toggelInput? 'row-reverse': ''} ;
    padding: 5px;
    /* margin-left: 15px; */

`


const Input = styled.input`
    border: none;
    /* width: 120px; */
    width: ${(props)=> props.toggelInput?'195px':'0px'};
    transition: all 0.4s ease-in-out;

    &:focus {
        outline: none;
    }
    ${mobile({width:(props)=> props.toggelInput?'110px':'0px' })}

`
const Button = styled.button`
    padding: 18px;
    border: none;
    height: 30px;
    color: black;
    outline: none;
    font-size: 18px;
    display: flex;
    align-items: center;
    background-color: #eeeaea;
    /* opacity: ${(props)=> props.toggelInput?1:0};
    transform: ${(props)=> props.toggelInput?'translateX(5px)':'translateX(-100px)'};
    transition: all 0.8s ease-in; */


`
const Center = styled.div`
    flex: 1;
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    display: flex;
    justify-content: center;
    ${mobile({fontSize:"24px"})}

`
const Span = styled.div`
  animation: ${rotate} 2s linear infinite;
  color: #a59459;

`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex:2,justifyContent:"center",marginLeft:"25px"})}

`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}


`

const Navbar = () => {
    const [toggelInput,setToggelInput] = useState(false);
    const searchRef = useRef()
    const handleClick = () =>{
        setToggelInput(true);
        searchRef.current.focus();

    }
    console.log(toggelInput)
    const onEscape = function (action) {
        window && window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                action();
            };
        });
    };
    onEscape(() => {
        searchRef.current.blur();
        setToggelInput(false)
     });
    return (
        <Conatainer>
            <Wrapper>
                <Left>
                    
                    <Language>
                        <LanguageIcon style={{fontWeight: 200}} />
                        En
                    </Language>

                    <SearchContainer toggelInput={toggelInput}>
                        <SearchIcon onClick={()=>handleClick()} style={{color: "gray",fontSize:"26px",border:"none"}} />

                        <Input toggelInput={toggelInput} placeholder='Search for products on E4try.com' ref={searchRef} />



                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        E<Span>4</Span>try
                    </Logo>
                </Center>
                <Right>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />   
                    </Badge>
                        
                    </MenuItem>
                    
                </Right>
                
            </Wrapper>
        </Conatainer>
       
    )
}

export default Navbar
