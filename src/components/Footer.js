import styled from 'styled-components'

const Container = styled.div`
  background: #fe8b01;
  color: white;
`

const Footer = () => {

    return(
        <Container>
        <p>Movie data supplied by The Movie DB</p>
        </Container>
    )

}

export default Footer;