import styled from 'styled-components'

import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer'
import SortSelect from '../components/Select/SortSelect'
import FilterSelect from '../components/Select/FilterSelect'


import Select from '../components/Select/Select';
import { mobile } from '../responsive';
const Container =styled.div`
    
`

const Title =styled.h1`
    margin: 20px;
`
const FilterContainer =styled.div`
    display: flex;
    justify-content: space-between;
    
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({display:"flex",flexDirection:"column"})}
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({marginRight:"0px"})}
`
// const Select = styled.select`
    
// `
// const Option = styled.option`
// `
const colors =['White','Black','Red','Blue','Yellow','Green'];
const sizes = ['XS','S','M','L','XL'];
const sortedBy = ['Price (ase)','Price (desc)'];
const ProductList = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>
                        Filter Products:
                    </FilterText>
                    <Select name="Color" items={colors}>
                        <FilterSelect />
                    </Select>
                    <Select name="Size" items={sizes}>
                        <FilterSelect />
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>
                        Sort Products: 
                    </FilterText>
                    <Select name="Newest" items={sortedBy}>
                        <SortSelect />
                    </Select>
                    {/* <SortSelect>
                    </SortSelect> */}
                </Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
            
        </Container>
    )
}
export default ProductList