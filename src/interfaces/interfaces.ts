import { ImageProps } from "react-native";

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

export interface IPresident {
    id: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    email: string;
    politicalStatus: 'INDEPENDANT' | 'DEMOCRATE' | 'REPUBLICAIN',
    occupation: string;
    brefSpeechAndBio: string;
    matchPercent: number;
    image: ImageProps;
    coveredImage: ImageProps;
    address?: string;
    city?: string;
    state?: string;
};

export interface IMatched {
    id: string;
    matched: boolean;
    presidentMatched: IPresident;
    electorISMatch: IElector;
}

export interface IElector{
    id: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    email: string;
    phones: Array<string>;
    occupation: string;
    images: Array<string>;
    address: string;
    city: string;
    state: string;
}

export interface IThemeProject  {
    id: string;
    theme: 'L\'education' | 'L\'environnement' | 'La santé' | 'L\'emploi'| 'L\'immigration';
};

export interface IPresidentProject {
    id: string;
    title: string;
    theme: IThemeProject
    description: string;
    presidentID: IPresident;
};


export interface IEducation {
    id: string;
    logo: string;
    name: string;
    date: string;
    presidentID: IPresident;

}
export interface IExperience {
    id: string;
    logo: string;
    SocietyName: string;
    date: string;
    presidentID: IPresident;

}
export interface IPresidentAbout {
    id: string;
    education: Array<IEducation>;
    experience: Array<IExperience>;
    projects: Array<IPresidentProject>;
    presidentID: IPresident;

}