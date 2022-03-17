
import React from 'react';
import Svg, {
  Path,
} from 'react-native-svg';

export default function Heart({ width, height }: any) {
  return (
    <Svg width={width ? width : "17"} height={height ? height : "15"} viewBox="0 0 17 15" fill="none">
    <Path d="M8.05957 2.87369L8.49953 3.68859L8.93951 2.8737C9.19735 2.39614 9.62703 1.75673 10.2583 1.26193L9.94985 0.868407L10.2583 1.26193C10.908 0.752683 11.6341 0.5 12.4288 0.5C14.6478 0.5 16.3819 2.33509 16.3819 4.89538C16.3819 6.25122 15.8516 7.41232 14.8487 8.63881C13.8331 9.8808 12.3704 11.1463 10.5513 12.7175L10.5513 12.7175L10.551 12.7177C9.93693 13.2481 9.23879 13.8511 8.51274 14.4946L8.51257 14.4948C8.50834 14.4985 8.50381 14.5 8.49954 14.5C8.49528 14.5 8.49078 14.4986 8.48658 14.4948L8.48632 14.4946C7.76071 13.8515 7.06288 13.2487 6.44941 12.7189L6.44817 12.7178L6.44816 12.7178C4.62888 11.1465 3.16604 9.88088 2.15043 8.63885C1.14751 7.41232 0.617188 6.25121 0.617188 4.89538C0.617188 2.33509 2.35128 0.5 4.57031 0.5C5.36501 0.5 6.09109 0.752683 6.74078 1.26193L7.04687 0.871419L6.74078 1.26193C7.37205 1.75674 7.80173 2.39612 8.05957 2.87369Z" stroke="#D5CCCC"/>
    </Svg>
  )
}