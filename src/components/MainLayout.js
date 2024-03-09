import Footer from './Footer';
import Header from './Header';

const Home = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Home;
