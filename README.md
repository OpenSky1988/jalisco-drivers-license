Add GADApplicationIdentifier String key in ios/JaliscoDriversLicenseTest/Info.plist and paste IOS-related ca-app-pub-xxxxxxxx~xxxxxxxx key there
(works only with react-native-google-mobile-ads v6.3.0)

If ios build fails because of Yoga, replace
node->getLayout().hadOverflow() |
with
node->getLayout().hadOverflow() ||
in node_modules/react-native/ReactCommon/yoga/yoga/Yoga.cpp