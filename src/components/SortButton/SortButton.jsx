import { Button, ButtonList } from './SortButton.style';

const SortButton = () => {
  return (
    <ButtonList>
      {['최신순', '최고 칼로리', '최저 칼로리'].map((button, index) => {
        return (
          <Button key={index} type="button">
            {button}
          </Button>
        );
      })}
    </ButtonList>
  );
};

export default SortButton;
