import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initPostList } from '../../redux/slices/posts.slice';
import { setActiveIndex, setData, setSortType, sortData } from '../../redux/slices/sortslice';
import { supabase } from '../../supabase/supabase';
import { Button, ButtonList } from './SortButton.style';

const SortButton = () => {
  const activeIndex = useSelector((state) => state.activeIndex.value);
  const dispatch = useDispatch();

  const handleSortButton = (index, sortType) => {
    dispatch(setActiveIndex(index));
    dispatch(setSortType(sortType));
    dispatch(sortData());
  };

  useEffect(() => {
    const getPosts = async () => {
      const posts = await supabase.post.getPosts();
      const action = initPostList(posts);
      dispatch(action);
      dispatch(setSortType('latest'));
      dispatch(setData(posts));
      dispatch(sortData());
      return posts;
    };
    getPosts();
  }, [dispatch]);

  return (
    <ButtonList>
      {['최신순', '최고 칼로리', '최저 칼로리'].map((button, index) => {
        return (
          <Button
            $active={activeIndex === index}
            onClick={() => handleSortButton(index, ['latest', 'highCalories', 'lowCalories'][index])}
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
