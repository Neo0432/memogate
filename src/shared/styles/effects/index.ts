import {Platform, StyleSheet} from 'react-native';

export const effects = StyleSheet.create({
  shadow1: {
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.02,
        shadowRadius: 12,
      },
      android: {
        shadowColor: '#00000033',
        elevation: 4,
        shadowOpacity: 0.04,
      },
    }),
  },
  shadow2: {
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 50,
      },
      android: {
        shadowColor: '#0000001a',
        elevation: 10,
        shadowOpacity: 0.1,
      },
    }),
  },
});

export default effects;
