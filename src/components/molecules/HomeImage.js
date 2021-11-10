import styled from "styled-components";
import P from '../atoms/P'

const Container = styled.div`
  text-align: center;
  margin-top: 15px;
`

const Image = styled.img`
  border-radius: 12px;
  width: 256px;
  height: 256px;
`


const HomeImage = () => {

    return (
        <Container>
            <Image src={'./tv-room.png'}/>
            {/* got this image here https://iconscout.com/illustration/tv-room-1970160 need to attribute*/}
            <P>Find where to stream Film and TV!</P>
        </Container>
    )
}

export default HomeImage;