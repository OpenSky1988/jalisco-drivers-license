import React from 'react';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

// import styles from './styles';

const QuestionImage: React.FC = () => {
  const { currentQuestionIndex, questionList } = useSelector((state: RootState) => state.questions);
  const imagePath = `../../assets/images/questions/${questionList[currentQuestionIndex]?.id}.png`;

  return <Image source={{ uri: imagePath }} />;
};

export default QuestionImage;
