import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  console.disableYellowBox = true;
  return <LottieView source={require('./animation.json')} autoPlay />;
};

export default Splash;
