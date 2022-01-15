import React from 'react'

import styled from 'styled-components'
import { mobile } from '../../responsive'
const Container = styled.div`

`
const Select = styled.select`
    padding: 20px;
    margin-right: 20px;
    ${mobile({padding:"5px",margin:"10px 0px"})}

`
const Option = styled.option`
`
const SortSelect = (props) => {
    return (
        <>
            <Select>
                <Option selected>
                {props.name}
                </Option>
                {props.items.map((item)=> (
                    <Option>{item}</Option>
                ))}
          </Select>
   
        </>
    )
}

export default SortSelect
