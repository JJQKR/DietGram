import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import MainPost from '../components/MainPost/MainPost';
import SortButton from '../components/SortButton/SortButton';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <main>
      <SortButton />
      <Button type={'button'} onclickFunc={() => navigate('/upload')} />
      <MainPost />
    </main>
  );
};

export default HomePage;
