import { WITH_ADS } from '@env';
import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const QuizEndBanner: React.FC = () =>
  WITH_ADS === 'true' ? (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.MEDIUM_RECTANGLE}
      onAdLoaded={() => console.log('Quiz End Banner loaded')}
      onAdFailedToLoad={(error) => console.error('Quiz End Banner failed to load: ', error)}
    />
  ) : null;

export default QuizEndBanner;
