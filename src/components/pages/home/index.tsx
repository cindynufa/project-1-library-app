import HomeAuthor from './HomeAuthors';
import HomeCategory from './HomeCategory';
import HomeHero from './HomeHero';
import HomeRecommendation from './HomeRecommendation';

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeCategory />
      <HomeRecommendation />
      <HomeAuthor />
    </>
  );
}
