import { useState } from 'react';
import { Button, ButtonList } from './SortButton.style';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { initDataList } from '../../redux/slices/supabase.slice';
import SupabaseFunc from '../../supabase/supabase';
import { useEffect } from 'react';
import {
  setActiveIndex,
  setData,
  setSortType,
  sortData,
} from '../../redux/slices/sortslice';

const SortButton = () => {
  const activeIndex = useSelector((state) => state.activeIndex.value);
  const dispatch = useDispatch();

  const handleSortButton = (index, sortType) => {
    dispatch(setActiveIndex(index));
    dispatch(setSortType(sortType));
    dispatch(sortData());
  };

  const supabase = SupabaseFunc;
  const posts = useSelector((state) => state.supabase.dataList);
  const formData = useSelector((state) => state.formData.menu);
  // get posts = App에서 useEffect로 받아서 => initialState 할당
  // 이외 db 다루는 함수 사용 후 redux에 payload로 전달
  // console.log('posts', posts);
  useEffect(() => {
    const getPosts = async () => {
      const posts = await SupabaseFunc.getPosts();
      const action = initDataList(posts);
      dispatch(action);
      dispatch(setSortType('latest'));
      dispatch(setData(posts));
      dispatch(sortData());
      return posts;
    };
    getPosts();
  }, [dispatch]);

  console.log(posts);

  return (
    <ButtonList>
      {['최신순', '최고 칼로리', '최저 칼로리'].map((button, index) => {
        return (
          <Button
            $active={activeIndex === index}
            onClick={() =>
              handleSortButton(
                index,
                ['latest', 'highCalories', 'lowCalories'][index]
              )
            }
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
