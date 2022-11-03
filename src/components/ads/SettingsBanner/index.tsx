import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const SettingsBanner: React.FC = () => (
  <BannerAd
    unitId={TestIds.BANNER}
    size={BannerAdSize.ADAPTIVE_BANNER}
    onAdLoaded={() => console.log('Settings Banner loaded')}
    onAdFailedToLoad={(error) => console.error('Settings Banner failed to load: ', error)}
  />
);

export default SettingsBanner;
