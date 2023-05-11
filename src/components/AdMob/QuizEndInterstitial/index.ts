import { WITH_ADS } from '@env';
import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const withAds = WITH_ADS === 'true';
const quizEndInterstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

export const onLoad = (handleLoad: () => any) => {
  console.log('onLoad called!');
  if (withAds) {
    quizEndInterstitial.addAdEventListener(AdEventType.LOADED, () => {
      handleLoad();
    });
  }
};

export const onClose = (handleClose: () => any) => {
  console.log('onClose called!');
  if (withAds) {
    quizEndInterstitial.addAdEventListener(AdEventType.CLOSED, () => {
      handleClose();
    });
  }
};

export default quizEndInterstitial;
