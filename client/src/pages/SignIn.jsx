import styled from "styled-components"


const Container = styled.div`
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.text};
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.bgLighter};
    border: 1px solid ${({theme}) => theme.soft};
    color: ${({theme}) => theme.text};
    padding: 11px 24px;
    gap: 15px;
`;
const Title = styled.h1`
    font-size: 24px;
`;
const SubTitle = styled.h2`
    font-size: 14px;
    font-weight: 400;
`;
const Input = styled.input`
    border: 1px solid ${({theme}) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
`;
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`;
const More = styled.div`
    display: flex;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
    margin-top: 20px;
`;
const Links = styled.div`
    margin-left: 25px;
`;
const Link = styled.span`
    margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to HOTUBE</SubTitle>
            <Input placeholder="UserName" />
            <Input type="password" placeholder="Password" />
            <Button>Sign In</Button>
            <SubTitle>OR</SubTitle>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button>Sign Up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
              <Link>Help</Link>
              <Link>Privacy</Link>
              <Link>Contact</Link>
            </Links>
        </More>
    </Container>
  )
}

export default SignIn
