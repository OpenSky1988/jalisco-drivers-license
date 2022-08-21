import { get, store } from '../../async-storage';
import { IQuestion } from '../../screens/Quiz/types';

const updateSuccessfullAttemts = async (testTypeKey: string) => {
  try {
    const currentPassedAttemts = await get(testTypeKey);

    await store(testTypeKey, currentPassedAttemts || 1);
  } catch (e) {
    throw new Error(`Update passed tests number error: ${e}`);
  }
};

const calculateTestSuccess = (finalScore: number, questionList: IQuestion[]) => {
  const successFactor = 20 / 18;
  return finalScore > questionList.length / successFactor;
};

export { updateSuccessfullAttemts, calculateTestSuccess };
