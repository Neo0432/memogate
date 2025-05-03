import {ReactNode} from 'react';
import {ITextInputProps} from '@shared/ui/text-inputs';
import {ControllerFieldState} from 'react-hook-form';

export interface IFormTextInputProps extends ITextInputProps {
  field: {
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
  };
  fieldState: ControllerFieldState;
  label: string;
  children?: ReactNode;
}
