import './App.css';
import Container from './components/container';
import Content from './components/content';
import Box from './components/header/body/footer/box';
import Header from './components/header/body/footer/header';

export default function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Header />
          <Box />
        </Content>
      </Container>
    </div>
  );
};
