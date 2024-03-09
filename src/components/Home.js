import Navbar from './Navbar';
import Banner from './Banner';
import Opening from './Opening';
import Choose from './Choose';
import CoffeeMenu from './CoffeeMenu';
import Recipes from './Recipes';
import Showcase from './Showcase';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Opening />
        <Choose />
        <CoffeeMenu />
        <Recipes />
        <Showcase />
      </main>
      <Footer />
    </>
  );
};

export default Home;
