import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  pageContainer: {
    position: 'relative',
    gap: 24,
    flex: 1,
  },
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
