import { AddTaskOutlined, ReplayOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material';
import styled from 'styled-components';
import Comments from '../components/Comments';
import Cards from '../components/Cards';


const Container = styled.div`
  display: flex;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div`
  
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};
`
const Recommendation = styled.div`
  flex: 2;
`;
const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;
const Image = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`
const ChannelDetails = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 10px;
  color: ${({theme}) => theme.text};
  font-size: 12px;
`;
const Description = styled.p`
  line-height: 14px;
  font-weight: 300;
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 5px;
  height: max-content;
  padding: 10px;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720px"
            src="https://www.youtube.com/shorts/GTqDRiXGGxM"
            title="Youtube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,777,777 views | October 21, 2023</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined /> 123
            </Button>
            <Button>
              <ThumbDownAltOutlined /> Dislike
            </Button>
            <Button>
              <ReplayOutlined /> Share
            </Button>
            <Button>
              <AddTaskOutlined /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src="https://images.pexels.com/photos/15421538/pexels-photo-15421538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <ChannelDetails>
              <ChannelName>Hopago</ChannelName>
              <ChannelCounter>구독자 2명</ChannelCounter>
              <Description>
                If i don't feel like training one day, it happens, cause i'm human.
                I don't think, well, im gone a day off cause it's only a day and i'm look the same.
                I think god will know.
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Cards type="row" />
      </Recommendation>
    </Container>
  );
}

export default Video
