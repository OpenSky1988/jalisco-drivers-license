import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../../screens/Quiz/types';

interface QuestionsState {
  correctOption: string | null;
  currentOptionSelected: string | null;
  currentQuestionIndex: number;
  isOptionsDisabled: boolean;
  questionList: IQuestion[];
  favorites: number[];
  score: number;
  showNextButton: boolean;
  showScoreModal: boolean;
}

const initialState = {
  correctOption: null,
  currentOptionSelected: null,
  currentQuestionIndex: 0,
  isOptionsDisabled: false,
  questionList: [],
  favorites: [],
  score: 0,
  showNextButton: false,
  showScoreModal: false,
} as QuestionsState;

const questions = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    nextQuestion(
      state,
      action: PayloadAction<{
        currentQuestionIndex: number;
        questionsNumber: number;
      }>,
    ) {
      if (action.payload.currentQuestionIndex === action.payload.questionsNumber) {
        // Last Question
        // Show Score Modal
        return (state = {
          ...state,
          showScoreModal: true,
        });
      }

      return (state = {
        ...state,
        currentQuestionIndex: action.payload.currentQuestionIndex + 1,
        currentOptionSelected: null,
        correctOption: null,
        isOptionsDisabled: false,
        showNextButton: false,
      });
    },
    restartQuiz(state) {
      return (state = {
        ...state,
        correctOption: null,
        currentOptionSelected: null,
        currentQuestionIndex: 0,
        isOptionsDisabled: false,
        score: 0,
        showNextButton: false,
        showScoreModal: false,
      });
    },
    setFavorites(state, action: PayloadAction<number[]>) {
      state.favorites = action.payload;
    },
    setQuestions(state, action: PayloadAction<IQuestion[]>) {
      state.questionList = action.payload;
    },
    updateAnswer(state, action: PayloadAction<{ correctOption: string; selectedOption: string }>) {
      const { correctOption, selectedOption } = action.payload;
      const isCorrect = selectedOption === correctOption;

      return (state = {
        ...state,
        currentOptionSelected: selectedOption,
        correctOption,
        isOptionsDisabled: true,
        score: isCorrect ? state.score + 1 : state.score,
        showNextButton: !isCorrect,
      });
    },
  },
});

export const { nextQuestion, restartQuiz, setFavorites, setQuestions, updateAnswer } =
  questions.actions;
export default questions.reducer;
