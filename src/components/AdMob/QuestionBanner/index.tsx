import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const QuestionBanner: React.FC = () => (
  <BannerAd
    unitId={TestIds.BANNER}
    size={BannerAdSize.ADAPTIVE_BANNER}
    onAdLoaded={() => console.log('Question Banner loaded')}
    onAdFailedToLoad={(error) => console.error('Question Banner failed to load: ', error)}
  />
);

export default QuestionBanner;
