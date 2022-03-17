import React from 'react';
import Svg, {
    Path,
    Rect
} from 'react-native-svg';

export default function BackIcon() {
    return (
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none">
            <Rect width="30" height="30" rx="10" fill="white" />
            <Path d="M12.1858 15.8105L17.903 21.5258C18.1539 21.776 18.5603 21.776 18.8118 21.5258C19.0627 21.2756 19.0627 20.8691 18.8118 20.6189L13.5481 15.3571L18.8112 10.0952C19.0621 9.84499 19.0621 9.43854 18.8112 9.18768C18.5603 8.93744 18.1533 8.93744 17.9024 9.18768L12.1852 14.9029C11.9382 15.1506 11.9382 15.5634 12.1858 15.8105Z" fill="#677294" />
        </Svg>
    )
}