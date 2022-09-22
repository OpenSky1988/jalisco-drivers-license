import { get } from '../../async-storage';
import { DEVICE_STORE_KEYS } from '../../async-storage/deviceStoreKeys';

const getSubtitle = async (subtitle: string, quizType: string) => {
  switch (quizType) {
    case DEVICE_STORE_KEYS.ORDERED:
    case DEVICE_STORE_KEYS.RANDOMIZED: {
      const passedAttemts = await get(quizType);

      return `Successfull attempts: ${passedAttemts || 0}`;
    }
    default: {
      return subtitle;
    }
  }
};

export { getSubtitle };
