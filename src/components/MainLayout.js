import Footer from './Footer';
import Header from './Header';

const Home = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Home;
