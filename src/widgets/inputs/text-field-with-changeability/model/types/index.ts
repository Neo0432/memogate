import {IBookmarkUpdateDTO} from '@entities/bookmark/types.ts';

export interface ITextFieldWithChangeabilityProps {
  itemName: 'id' | 'title' | 'description' | 'url';
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
}
