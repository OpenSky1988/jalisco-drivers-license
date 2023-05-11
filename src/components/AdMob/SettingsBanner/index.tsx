import { WITH_ADS } from '@env';
import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from 'react-native-google-mobile-ads';

const SettingsBanner: React.FC = () =>
  WITH_ADS === 'true' ? (
    <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      onAdLoaded={() => console.log('Settings Banner loaded')}
      onAdFailedToLoad={(error) => console.error('Settings Banner failed to load: ', error)}
    />
  ) : null;

export default SettingsBanner;
