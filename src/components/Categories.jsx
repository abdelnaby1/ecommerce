import React,{useEffect} from 'react'
import {categories} from '../date';
import styled from 'styled-components';
import CategoryItem from './CategoryItem';

import {mobile} from '../responsive'


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding:"0px",flexDirection:"column"})}

`
const fades = ["right","up","left"]

const Categories = () => {

    return (
        <Container>
            {categories.map((item,index)=>(
                <CategoryItem item={item} fade={fades[index]} key={item.id}/>
            ))}
        </Container>
    )
}

export default Categories
