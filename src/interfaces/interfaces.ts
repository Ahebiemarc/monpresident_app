import { ImageProps } from "react-native";
import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";


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
};

export interface IOccupation{
    id: string;
    occupation: string;
    societyName: string;
    date: string;
    logo: ImageProps;

};

export interface IEducation {
    id: string;
    nameOfschool: string;
    city: string;
    date: string;
    logo: ImageProps;
}

export interface IExperience {
    id: string;
    SocietyName: string;
    date: string;
    logo: ImageProps;
    yearOfexprience: number;
}

export interface IPresident {
    id: string;
    firstname: string;
    lastname: string;
    birthdate: string;
    gender: string;
    email: string;
    politicalStatus: 'INDEPENDANT' | 'DEMOCRATE' | 'REPUBLICAIN',
    brefSpeechAndBio: string;
    matchPercent: number;
    image: ImageProps;
    coveredImage: ImageProps;
    address: string;
    city: string;
    state: string;
    aboutPresident: IPresidentAbout;
    
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
    country: string;
    religion: string;
    relationshipStatus: string;
}

export interface IThemeProject  {
    id: string;
    theme: 'L\'education' | 'L\'environnement' | 'La santé' | 'L\'emploi'| 'L\'immigration';
};

export interface IProject {
    id: string;
    title: string;
    theme: IThemeProject
    description: string;
    images?: Array<ImageProps>;
};


export interface IPresidentAbout {
    id: string;
    education: Array<IEducation>;
    experience: Array<IExperience>;
    occupation: Array<IOccupation>;
    projects: Array<IProject>;

};



export interface IBottomSheetPropsWithIndexChange extends BottomSheetProps {
  onChangeIndex?: (newIndex: number) => void;
  ref?: React.RefObject<BottomSheetMethods>;
}




