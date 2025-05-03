export interface ISignUpFormInput {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface IButtonsArea {
  isValid: boolean;
  isSubmitting: boolean;
  onSubmit: () => void;
}
