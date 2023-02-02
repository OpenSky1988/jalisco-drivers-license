import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { getAll } from '../async-storage';

const onGoogleLoginPress = async () => {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const user = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(user.idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (e) {
    const errorCode = (e as ErrnoException)?.code;

    if (errorCode === statusCodes.SIGN_IN_CANCELLED) {
      console.log('Sign in cancelled');
    } else if (errorCode === statusCodes.IN_PROGRESS) {
      console.log('Sign in is already in progress');
    } else if (errorCode === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('Play Services are not available');
    } else {
      console.log(`Unknown Google Sign-in error ${e}`);
    }
  }
};

const onGoogleLogoutPress = async () => {
  try {
    await GoogleSignin.signOut();
    await auth().signOut();
  } catch (e) {
    console.log(`Unknown Google Sign-out error ${e}`);
  }
};

const restoreUserData = async () => {
  try {
    const currentUser = await GoogleSignin.getCurrentUser();
    const userId = currentUser?.user.id as string;

    if (userId) {
      const data = await database().ref(`/users/${userId}`).once('value');
      const snapshot = data.val();

      if (snapshot) {
        return snapshot;
      }

      return null;
    }

    return null;
  } catch (e) {
    throw new Error(`Unable to restore user data ${e}`);
  }
};

const storeUserData = async () => {
  try {
    const currentUser = await GoogleSignin.getCurrentUser();
    const userId = currentUser?.user.id as string;

    if (userId) {
      const userStats = await getAll();

      await database().ref(`/users/${userId}`).update(userStats);
    }
  } catch (e) {
    throw new Error(`Unable to store user data ${e}`);
  }
};

export { onGoogleLoginPress, onGoogleLogoutPress, restoreUserData, storeUserData };
