import {useEffect} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {cropTitle} from '@shared/utils/text/crop-title';

interface ISetHeaderTitleProps {
  title?: string;
  placeholder?: string;
  navigation: NativeStackNavigationProp<any>;
}

export const useSetHeaderTitle = ({
  title,
  placeholder,
  navigation,
}: ISetHeaderTitleProps) => {
  return () =>
    useEffect(() => {
      if (title)
        navigation.setOptions({title: cropTitle(title, 23) || placeholder});
    }, [title, navigation, placeholder]);
};
