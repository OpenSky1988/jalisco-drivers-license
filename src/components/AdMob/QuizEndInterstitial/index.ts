import { AdEventType, InterstitialAd, TestIds } from 'react-native-google-mobile-ads';

const quizEndInterstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

export const onLoad = (handleLoad: () => any) => {
  console.log('onLoad called!');
  quizEndInterstitial.addAdEventListener(AdEventType.LOADED, () => {
    handleLoad();
  });
};

export const onClose = (handleClose: () => any) => {
  console.log('onClose called!');
  quizEndInterstitial.addAdEventListener(AdEventType.CLOSED, () => {
    handleClose();
  });
};

export default quizEndInterstitial;
