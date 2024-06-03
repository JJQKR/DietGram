import { useState } from 'react';
import { Button, ButtonList } from './SortButton.style';

const SortButton = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSortButton = (index) => {
    setActiveIndex(index);
  };

  return (
    <ButtonList>
      {['최신순', '최고 칼로리', '최저 칼로리'].map((button, index) => {
        return (
          <Button
            $active={activeIndex === index}
            onClick={() => handleSortButton(index)}
            key={index}
            type="button"
          >
            {button}
          </Button>
        );
      })}
    </ButtonList>
  );
};

export default SortButton;
