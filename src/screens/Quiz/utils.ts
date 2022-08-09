import { get, store } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

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

export { increaseWrongAnswersInDeviceStorage, decreaseWrongAnswersInDeviceStorage };
