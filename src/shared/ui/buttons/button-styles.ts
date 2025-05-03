import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles';

interface ButtonStyleProps {
  disabled?: boolean;
  size: 'large' | 'medium' | 'small';
  colorVariant: 'primary' | 'secondary';
}

export function getButtonStyle({
  disabled = false,
  size,
  colorVariant,
}: ButtonStyleProps) {
  const initialStyles = {
    ...buttonStyle.button,
    ...buttonStyle[size],
  };
  const styleVariant =
    colorVariant === 'primary'
      ? buttonStyle.primaryInitial
      : buttonStyle.secondaryInitial;
  const styleDisabled =
    colorVariant === 'primary'
      ? buttonStyle.primaryDisabled
      : buttonStyle.secondaryDisabled;

  return [initialStyles, disabled ? styleDisabled : styleVariant];
}
export const buttonStyle = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    color: colors.grayscale.color100,
  },

  //sizes
  large: {
    paddingVertical: 16,
    paddingInline: 12,
    gap: 10,
    width: 327,
    minHeight: 54,
  },

  medium: {
    paddingVertical: 16,
    paddingInline: 12,
    gap: 10,
    width: 295,
    minHeight: 54,
  },

  small: {
    padding: 12,
    gap: 10,
  },

  //states
  //primary
  primaryInitial: {
    backgroundColor: colors.grayscale.color800,
  },

  primaryPressed: {
    backgroundColor: colors.grayscale.color700,
  },

  primaryDisabled: {
    backgroundColor: colors.grayscale.color500,
  },

  exit: {
    backgroundColor: colors.grayscale.color800,
    color: colors.additional.error,
  },

  //secondary
  secondaryInitial: {
    backgroundColor: colors.grayscale.color300,
  },

  secondaryPressed: {
    backgroundColor: colors.grayscale.color600,
  },

  secondaryDisabled: {
    backgroundColor: colors.grayscale.color300,
  },
});
