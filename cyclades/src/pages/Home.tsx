import { Container } from '@mui/material';

const Home = () => {
  return (
    <Container
      role="main"
      id="page-maincontent"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <h1>Présentation</h1>
      <iframe
        width="560"
        height="315"
        style={{ border: 'none' }}
        src="https://www.youtube.com/embed/2XTGOmcf1YI?si=2YFa5-jlHX6Nq0uH&amp;start=22"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Container>
  );
};

export default Home;
