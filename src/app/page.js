import MainLayout from '@/components/MainLayout';
import Banner from '@/components/Banner';
import Opening from '@/components/Opening';
import Choose from '@/components/Choose';
import CoffeeMenu from '@/components/CoffeeMenu';
import Recipes from '@/components/Recipes';
import Showcase from '@/components/Showcase';

export default function HomePage() {
  return (
    <MainLayout>
      <Banner />
      <Opening />
      <Choose />
      <CoffeeMenu />
      <Recipes />
      <Showcase />
    </MainLayout>
  );
}
