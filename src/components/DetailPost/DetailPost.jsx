import { useParams } from 'react-router-dom';
import DetailPostCommentData from '../DetailPostCommentData/DetailPostCommentData';
import DetailPostData from '../DetailPostData/DetailPostData';
import { DetailPostList } from './DetailPost.style';
import { supabase } from '../../supabase/supabase';
import { useEffect } from 'react';

const DetailPost = () => {
  const params = useParams();
  console.log(params);
  return (
    <DetailPostList>
      <DetailPostData />
      <DetailPostCommentData />
    </DetailPostList>
  );
};

export default DetailPost;
