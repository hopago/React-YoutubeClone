import styled from "styled-components";


const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Title = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`;
const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`;
const Text = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
        <Avatar src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <Details>
            <Title>Hopago <Date>1 min ago</Date></Title>
            <Text>WoW!</Text>
        </Details>
    </Container>
  )
}

export default Comment
