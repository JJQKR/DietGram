import { createSlice } from '@reduxjs/toolkit';

const INITIAL_POSTS = [
  {
    id: '59454ecd-0f61-422a-89d9-3213915343f2',
    //postImage,
    menu: '초밥',
    description: '너무 맛있어용',
    date: '2024-06-01',
    calories: '1000',
    rate: '9',
    price: '22000',
    place: '초밥쟁이'
  },
  {
    id: '4f60bace-03dc-458d-b0dc-d89ada034b29"454ecd-0f61-422a-89d9-3213915343f2',
    //postImage,
    menu: '페스토 햄 모짜렐라',
    description: '가성비는 좀 아쉽지만 단백질 함량 굿',
    date: '2024-06-01',
    calories: '450',
    rate: '8',
    price: '6500',
    place: '할리스커피'
  }
];

const postsSlice = createSlice({
  name: 'posts',
  initialState: INITIAL_POSTS,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    changePost: (state, action) => {
      const { id, postImage, menu, description, date, calories, rate, price, place } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.postImage = postImage;
        existingPost.menu = menu;
        existingPost.description = description;
        existingPost.date = date;
        existingPost.calories = calories;
        existingPost.rate = rate;
        existingPost.price = price;
        existingPost.place = place;
      }
    },
    deletePost: (state, action) => {
      const { id } = action.payload;
      return state.filter((post) => post.id !== id);
    }
  }
});

export const { addPost, changePost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
