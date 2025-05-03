import {Dispatch, SetStateAction} from 'react';

export interface IPasswordInputIconProps {
  fieldState: any;
  fieldName: string;
  isPasswordShown: boolean;
  setIsPasswordShown: Dispatch<SetStateAction<boolean>>;
  hasValidation?: boolean;
}
