import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../store';

const useCountdown = (isMarathon: boolean): [countdown: number, clearCountdown: () => void] => {
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (isMarathon) {
      const interval = setInterval(() => setCountdown((prevCountdown) => prevCountdown - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [isMarathon]);

  return [countdown, () => setCountdown(20)];
};

const useBookmarked = (currentQuestionId: number): boolean => {
  const navigation = useNavigation();
  const { favorites } = useSelector((state: RootState) => state.questions);
  const [isBookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(favorites?.includes(currentQuestionId));
  }, [currentQuestionId, favorites, navigation]);

  return isBookmarked;
};

export { useBookmarked, useCountdown };
