import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bookmarksContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: 8,
  },

  noData: {
    flex: 1,
    paddingInline: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
