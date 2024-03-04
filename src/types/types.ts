import { PressableProps, StyleProp, ViewStyle } from "react-native";
import { SharedValue } from "react-native-reanimated";

export type GenerateTabShapePath = (
    position:number,
    adjustedHeight:number,
) => string

export type CircleProps = {
    circleX: SharedValue<number>;
};


export type TabProps = {
    label: string;
    icon: string;
    index: number;
    activeIndex: number;
    onTabPress: () => void;
};

export type CircularProgressBarProps = {
    positionX: number;
    positionY: number;
    bg_stroke_color?: string;
    stroke_color?: string;
    bg_fill_color?: string;
    percent: number;
};






  

