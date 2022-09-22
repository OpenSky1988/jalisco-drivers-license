import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BookmarkOutlined: React.FC<SvgProps> = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 9C4 6.17157 4 4.75736 4.87868 3.87868C5.75736 3 7.17157 3 10 3H14C16.8284 3 18.2426 3 19.1213 3.87868C20 4.75736 20 6.17157 20 9V15.8276C20 18.5109 20 19.8525 19.1557 20.2629C18.3114 20.6733 17.2565 19.8444 15.1465 18.1866L14.4713 17.656C13.2849 16.7239 12.6917 16.2578 12 16.2578C11.3083 16.2578 10.7151 16.7239 9.52871 17.656L8.85346 18.1866C6.74355 19.8444 5.68859 20.6733 4.84429 20.2629C4 19.8525 4 18.5109 4 15.8276V9Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </Svg>
);

export { BookmarkOutlined };
