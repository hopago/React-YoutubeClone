import { Link } from 'react-router-dom';
import styled from 'styled-components'


const Container = styled.div`
    width: ${(props) => props.type !== "row" && '360px'};
    margin-bottom: ${(props) => props.type === "row" ? "25px" : "50px"};
    display: ${(props) => props.type === "row" && "flex"};
    row-gap: 10px;
`;
const Image = styled.img`
    width: 100%;
    height: ${(props) => props.type === "row" ? "100px" : "202px"};
    background-color: #999;
    object-fit: cover;
    border-radius: ${(props) => props.type === "row" ? "9px" : "18px"};
    cursor: pointer;
    flex: 1;
`;
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => props.type === 'row' ? "0px" : "16px"};
    gap: 12px;
    flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;  
  cursor: pointer;
  display: ${(props) => props.type === 'row' && 'none'};
`;
const Texts = styled.div`
    
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: bold;
    color: ${({theme}) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 10px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
`;

const Card = ({ type }) => {

  return (
    <Container type={type}>
      <Image type={type} src="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Details type={type}>
        <Link className="link" to="/video/vId">
          <ChannelImage
            type={type}
            src="https://images.pexels.com/photos/1933464/pexels-photo-1933464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Link>
        <Texts>
          <Link className="link" to="/video/vId">
            <Title>Test Video</Title>
          </Link>
          <ChannelName>Hopago</ChannelName>
          <Info>777,777 views | 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
  );
}

export default Card
