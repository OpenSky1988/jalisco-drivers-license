import { AdEventType, InterstitialAd, TestIds } from '@react-native-firebase/admob';

const quizEndInterstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

export const onLoad = (handleLoad: () => any) => {
  console.log('onLoad called!');
  quizEndInterstitial.onAdEvent((type) => {
    if (type === AdEventType.LOADED) {
      handleLoad();
    }
  });
};

export const onClose = (handleClose: () => any) => {
  console.log('onClose called!');
  quizEndInterstitial.onAdEvent((type) => {
    if (type === AdEventType.CLOSED) {
      handleClose();
    }
  });
};

export default quizEndInterstitial;
