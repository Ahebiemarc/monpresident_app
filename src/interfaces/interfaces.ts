export interface IOnboardingSlide {
    key: string;
    title: string;
    description: string;
    image: any;
};

export interface IButton{
    title: string;
    color: string;
    paddingH: number;
    paddingV: number;
    right?: number;
    left?: number;
    onPress?: () => void;
}