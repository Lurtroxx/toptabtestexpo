import * as React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';

export const SpotsSVG = (props) => {
  const { color } = props;
  return (
    <Svg
      width={moderateScale(32)}
      height={moderateVerticalScale(28)}
      viewBox='0 0 32 28'
      fill={color}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M28 19.53h-.469v-8.31h-3.014v1.747c0 1.351-.473 2.605-1.23 3.515-.76.91-1.79 1.47-2.922 1.47h-8.73c-1.132 0-2.162-.56-2.921-1.47-.758-.91-1.231-2.164-1.23-3.515v-1.746H4.468v8.308H4V20h24v-.47z'
        fill={color}
      />
    </Svg>
  );
};
