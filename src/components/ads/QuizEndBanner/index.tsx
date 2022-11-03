import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const QuizEndBanner: React.FC = () => (
  <BannerAd
    unitId={TestIds.BANNER}
    size={BannerAdSize.MEDIUM_RECTANGLE}
    onAdLoaded={() => console.log('Advert loaded')}
    onAdFailedToLoad={(error) => console.error('Advert failed to load: ', error)}
  />
);

export default QuizEndBanner;
