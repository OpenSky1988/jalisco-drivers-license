import { WITH_ADS } from '@env';
import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const QuestionBanner: React.FC = () =>
  WITH_ADS === 'true' ? (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      onAdLoaded={() => console.log('Question Banner loaded')}
      onAdFailedToLoad={(error) => console.error('Question Banner failed to load: ', error)}
    />
  ) : null;

export default QuestionBanner;
