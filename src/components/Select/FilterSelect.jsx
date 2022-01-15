import React from 'react'
import styled from 'styled-components'

// const Container = styled.div`

import { mobile } from '../../responsive'
// `
const Select = styled.select`
    padding: ${props => props.padding? props.padding:'20px'};
    margin-right: ${props => props.padding? '0':'20px'};

    /* margin-right: 20px; */
    ${mobile({width:"100px",padding:"5px",margin:"10px 0px"})}
    
`
const Option = styled.option`
    
`
const FilterSelect = (props) => {
    return (
        <Select padding={props.padding}>
            <Option selected disabled>
            {props.name}
            </Option>
            {props.items.map((item)=> (
                <Option>{item}</Option>
            ))}
      </Select>

    )
}

export default FilterSelect
