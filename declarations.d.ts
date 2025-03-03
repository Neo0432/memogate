declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module 'htmlparser2-without-node-native' {
  import {DomUtils, ElementType} from 'htmlparser2-without-node-native';
  export {DomUtils, ElementType};
}
