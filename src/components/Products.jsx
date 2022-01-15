import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../date';
import Product from './Product';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
    justify-content: space-between;
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map((p)=> (
                <Product product={p} key={p.id} />
            ))}
        </Container>
    )
}

export default Products
