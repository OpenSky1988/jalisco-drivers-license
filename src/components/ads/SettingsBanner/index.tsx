import React from 'react';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';

const SettingsBanner: React.FC = () => (
  <BannerAd
    unitId={TestIds.BANNER}
    size={BannerAdSize.ADAPTIVE_BANNER}
    onAdLoaded={() => console.log('Advert loaded')}
    onAdFailedToLoad={(error) => console.error('Advert failed to load: ', error)}
  />
);

export default SettingsBanner;
