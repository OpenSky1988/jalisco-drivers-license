import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import { get, store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';
import data from '../../data/quiz';
import { shuffleArray } from '../../utils';
import { IQuestion } from './types';

const updateWrongAnswersInDeviceStorage = async (
  currentQuestionId: number,
  updateCallback: (wrongAnswersNumber: number) => void,
) => {
  try {
    const wrongAnswers = await get(DEVICE_STORE_KEYS.WRONG_ANSWERS);

    await store(DEVICE_STORE_KEYS.WRONG_ANSWERS, {
      ...wrongAnswers,
      [currentQuestionId]: updateCallback(wrongAnswers?.[currentQuestionId]),
    });
  } catch (e) {
    throw new Error(`Update wrong answer error: ${e}`);
  }
};

const increaseWrongAnswersInDeviceStorage = async (currentQuestionId: number) => {
  await updateWrongAnswersInDeviceStorage(currentQuestionId, (wrongAnswersNumber: number) => {
    return wrongAnswersNumber ? wrongAnswersNumber + 1 : 1;
  });
};

const decreaseWrongAnswersInDeviceStorage = async (currentQuestionIndex: number) => {
  await updateWrongAnswersInDeviceStorage(currentQuestionIndex, (wrongAnswersNumber: number) => {
    return wrongAnswersNumber ? wrongAnswersNumber - 1 : 0;
  });
};

const filterMistakes = async (questions: IQuestion[]): Promise<IQuestion[]> => {
  const wrongAnswers = (await get(DEVICE_STORE_KEYS.WRONG_ANSWERS)) || {};
  const wrongAnswersKeys = Object.keys(wrongAnswers);

  const filteredMistakes = questions.filter(
    (question) => wrongAnswersKeys.includes(`${question.id}`) && wrongAnswers[question.id],
  );

  return filteredMistakes;
};

const filterFavorites = async (questions: IQuestion[]): Promise<IQuestion[]> => {
  const favoritesIds = (await get(DEVICE_STORE_KEYS.FAVORITES)) || [];
  const filteredFavorites = questions.filter((question) => favoritesIds.includes(question.id));

  return filteredFavorites;
};

const questionsPrepper = (quizType: keyof typeof DEVICE_STORE_KEYS) => {
  const questionPreppers = {
    [DEVICE_STORE_KEYS.FAVORITES]: async (questionsData: IQuestion[]) => {
      const filteredFavorites = await filterFavorites(questionsData);
      return shuffleArray(filteredFavorites);
    },
    [DEVICE_STORE_KEYS.MARATHON]: (questionsData: IQuestion[]) => questionsData,
    [DEVICE_STORE_KEYS.MISTAKES]: async (questionsData: IQuestion[]) => {
      const filteredMistakes = await filterMistakes(questionsData);
      return shuffleArray(filteredMistakes);
    },
    [DEVICE_STORE_KEYS.ORDERED]: (questionsData: IQuestion[]) => questionsData,
    [DEVICE_STORE_KEYS.RANDOMIZED]: (questionsData: IQuestion[]) => shuffleArray(questionsData),
  };

  return questionPreppers[quizType];
};

const getQuizLanguage = (OSlanguage: string): 'es' | 'en' => {
  switch (OSlanguage) {
    case 'es':
      return 'es';
    case 'en':
    default:
      return 'en';
  }
};

const setupQuiz = async (quizType: keyof typeof DEVICE_STORE_KEYS): Promise<IQuestion[]> => {
  const OSlanguage = RNLanguageDetector.detect() as string;
  const language = getQuizLanguage(OSlanguage);
  const quizData = data[language];

  const preparedQuestions = await questionsPrepper(quizType)(quizData);

  return preparedQuestions as IQuestion[];
};

export {
  getQuizLanguage,
  decreaseWrongAnswersInDeviceStorage,
  filterFavorites,
  filterMistakes,
  increaseWrongAnswersInDeviceStorage,
  questionsPrepper,
  setupQuiz,
};
