const shuffleArray = (array: unknown[]): unknown[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }

  return newArray;
};

const tryParseJSONObject = (jsonString: string | null) => {
  try {
    const obj = jsonString && JSON.parse(jsonString);

    if (obj && typeof obj === 'object') {
      return obj;
    }
  } catch (e) {
    console.log('Parsed value is not JSON', e);
  }

  return false;
};

const isObject = (value: unknown) =>
  typeof value === 'object' && !Array.isArray(value) && value !== null;

export { isObject, shuffleArray, tryParseJSONObject };
