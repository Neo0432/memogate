import {StyleSheet} from 'react-native';

export const fontFamily = {
  OUTFIT: {
    regular: 'outfit-regular',
    medium: 'outfit-medium',
    semibold: 'outfit-semi-bold',
    bold: 'outfit-bold',
  },
};

const typography = StyleSheet.create({
  //Title
  T_1_Bold_28pt: {
    fontFamily: fontFamily.OUTFIT.bold,
    fontSize: 28,
    fontWeight: 700,
    lineHeight: 39.2,
  },

  T_2_SemiBold_28pt: {
    fontFamily: fontFamily.OUTFIT.semibold,
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 39.2,
  },

  //Headline
  H_1_SemiBold_20pt: {
    fontFamily: fontFamily.OUTFIT.semibold,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 28,
  },

  H_2_Medium_18pt: {
    fontFamily: fontFamily.OUTFIT.medium,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 25.2,
  },

  H_3_Regular_18pt: {
    fontFamily: fontFamily.OUTFIT.regular,
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 25.2,
  },

  H_4_SemiBold_16pt: {
    fontFamily: fontFamily.OUTFIT.semibold,
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 22.4,
  },

  //Body
  B_1_Medium_16pt: {
    fontFamily: fontFamily.OUTFIT.medium,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 22.4,
  },

  B_2_Regular_16pt: {
    fontFamily: fontFamily.OUTFIT.regular,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22.4,
  },

  B_3_Bold_14pt: {
    fontFamily: fontFamily.OUTFIT.bold,
    fontSize: 14,
    fontWeight: 700,
    lineHeight: 19.6,
  },

  B_4_Regular_14pt: {
    fontFamily: fontFamily.OUTFIT.regular,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 19.6,
  },

  //Caption
  C_1_Regular_12pt: {
    fontFamily: fontFamily.OUTFIT.regular,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 16.8,
  },
});

export default typography;
