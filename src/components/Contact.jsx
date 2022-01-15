import { 
    MailOutline,
    Phone,
    Room,} from '@mui/icons-material';

import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    flex-direction: column;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Contact = () => {
    return (
        <Container>
            <ContactItem>
            <Room style={{marginRight:"10px"}}/> Egypt, Cairo
            </ContactItem>
            <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +201150893242
            </ContactItem>
            <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> ahmedabdelnaby471@gmail.com
            </ContactItem>

        </Container>
    )
}

export default Contact
