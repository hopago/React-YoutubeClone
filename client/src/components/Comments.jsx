import styled from "styled-components"
import Comment from "./Comment";


const Container = styled.div`
    
`;
const NewComment = styled.div`
    display: flex;
    align-content: center;
    gap: 10px;
`;
const Avatar = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
`;
const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    color: ${({theme}) => theme.text};
    padding: 5px;
    width: 100%;
`;

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src="https://images.pexels.com/photos/15421538/pexels-photo-15421538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <Input placeholder="Comment..." />
        </NewComment>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </Container>
  )
}

export default Comments
