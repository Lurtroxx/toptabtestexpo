import * as React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

export const EventSVG = (props) => {
  const { color } = props;
  return (
    <Svg
      width={moderateScale(props.size ?? 24)}
      height={moderateVerticalScale(props.size ?? 24)}
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <G clipPath='url(#clip0_8009_193261)'>
        <Path
          d='M19.5 3H18.5V1H16.5V3H8.5V1H6.5V3H5.5C4.4 3 3.5 3.9 3.5 5V19C3.5 20.1 4.4 21 5.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM19.5 19H5.5V9H19.5V19ZM5.5 7V5H19.5V7H5.5ZM11.06 17.46L16.99 11.53L15.93 10.47L11.06 15.34L8.95 13.23L7.89 14.29L11.06 17.46Z'
          fill={props.color ?? '#393F43'}
        />
      </G>
      <Defs>
        <ClipPath id='clip0_8009_193261'>
          <Rect
            width={24}
            height={24}
            fill='white'
            transform='translate(0.5)'
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
