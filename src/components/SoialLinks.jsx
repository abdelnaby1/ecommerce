import React from 'react'

import { Facebook,
    Instagram,
    Pinterest,
    Twitter,} from '@mui/icons-material';
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
`
const SoialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #${(props)=> props.color};
`
const SoialLinks = () => {
    return (
        <Container>
            <SoialIcon color='3B5999'>
                <Facebook />
            </SoialIcon>
            <SoialIcon color='E4405F'>
                <Instagram />
            </SoialIcon>
            {/* <SoialIcon color='3B5999'>
                <MailOutline />
            </SoialIcon> */}
            {/* <SoialIcon color='3B5999'>
                <Phone />
            </SoialIcon> */}
           
            {/* <SoialIcon color='3B5999'>
                <Room />
            </SoialIcon> */}
            <SoialIcon color='55ACEE'>
                <Twitter />
            </SoialIcon>
            <SoialIcon color='E60023'>
                <Pinterest />
            </SoialIcon>
            
            
        </Container>
    )
}

export default SoialLinks
