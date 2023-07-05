import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const GoogleSvg = () => (
  <Svg width={105} height={40} fill='none' xmlns='http://www.w3.org/2000/svg'>
    <Rect x={0.5} y={0.5} width={104} height={39} rx={4.5} fill='#fff' />
    <Path
      d='M49.016 18.903h5.616a6.767 6.767 0 0 1-.132 3.159 5.395 5.395 0 0 1-1.535 2.5c-.673.615-1.492 1.039-2.457 1.273a6.407 6.407 0 0 1-3.071-.044 5.568 5.568 0 0 1-2.15-1.097 5.823 5.823 0 0 1-1.623-1.974c-.644-1.229-.82-2.53-.527-3.905a4.542 4.542 0 0 1 .527-1.491c.701-1.463 1.828-2.457 3.378-2.984 1.345-.468 2.69-.453 4.036.044a6.04 6.04 0 0 1 1.93 1.185c-.058.087-.16.204-.307.35-.146.118-.234.206-.263.264a6.421 6.421 0 0 0-.57.526c-.234.234-.41.425-.527.57a3.058 3.058 0 0 0-1.316-.789 3.254 3.254 0 0 0-1.755-.044 3.497 3.497 0 0 0-1.799.965c-.38.41-.672.892-.877 1.448a3.522 3.522 0 0 0 0 2.325c.263.76.731 1.375 1.404 1.843.41.293.848.483 1.316.57.439.088.921.088 1.448 0a3.284 3.284 0 0 0 1.316-.526c.673-.439 1.067-1.053 1.184-1.843h-3.246v-2.325Zm12.723.132v1.491h-2.062v2.018h-1.492v-2.018h-2.062v-1.491h2.062v-2.062h1.492v2.062h2.062Z'
      fill='#142535'
    />
    <Rect x={0.5} y={0.5} width={104} height={39} rx={4.5} stroke='#DBE9F5' />
  </Svg>
);

export default GoogleSvg;
