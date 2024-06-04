import MainPost from '../components/MainPost/MainPost';
import SortButton from '../components/SortButton/SortButton';
import AddPostButton from '../components/AddPostButton/AddPostButton';

const Home = () => {
  return (
    <main>
      <SortButton />
      <AddPostButton />
      <MainPost />
    </main>
  );
};

export default Home;
