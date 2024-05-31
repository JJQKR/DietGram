import MainPost from '../components/MainPost/MainPost';
import SortButton from '../components/SortButton/SortButton';
import AddPostButton from '../components/AddPostButton/AddPostButton';

const Home = () => {
  return (
    <div>
      <SortButton />
      <AddPostButton />
      <MainPost />
    </div>
  );
};

export default Home;
