import styled from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './utils/Theme';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';


const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({theme}) => theme.bg};
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path='video'>
                  <Route path=':id' element={<Video />} />
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
