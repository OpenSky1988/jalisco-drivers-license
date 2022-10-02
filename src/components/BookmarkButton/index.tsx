import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import { RootState } from '../../store';
import { setFavorites } from '../../store/slices/questions';
import BookmarkFilled from '../Icons/BookmarkFilled';
import BookmarkOutlined from '../Icons/BookmarkOutlined';
import { IBookmarkButtonProps } from './types';

const BookmarkButton: React.FC<IBookmarkButtonProps> = ({ currentQuestionId, isBookmarked }) => {
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.questions);

  const onPress = async () => {
    const newFavorites = isBookmarked
      ? favorites.filter((item: number) => item !== currentQuestionId)
      : [...favorites, currentQuestionId];

    dispatch(setFavorites(newFavorites));
    await store(DEVICE_STORE_KEYS.FAVORITES, newFavorites);
  };

  return (
    <TouchableOpacity onPress={onPress}>
      {isBookmarked ? <BookmarkFilled /> : <BookmarkOutlined />}
    </TouchableOpacity>
  );
};

export default BookmarkButton;
