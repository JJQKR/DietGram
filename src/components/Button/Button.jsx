import { useNavigate } from 'react-router-dom';
import { NewPostButton } from './Button.style';

const Button = () => {
  const navigate = useNavigate();
  return <NewPostButton onClick={() => navigate('/upload')}>+</NewPostButton>;
};

export default Button;
