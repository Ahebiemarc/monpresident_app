import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { IPresident } from "../../interfaces/interfaces";
import { PhotoFile } from "react-native-vision-camera";



// définition des paramètres de route possibles pour la pile racine de  l'application
export type RootStackParamList = {
  Tab: NavigatorScreenParams<TabParamList>;
  Splash: undefined
  Onboarding: undefined;
  Login: undefined;
  Signup: {photo?: PhotoFile};
  PresidentInfo: {item: IPresident};
  PresidentAbout: { item: IPresident};
  CameraFace: {photo?: string};

  
};

/**
 * Cette déclaration de type est utilisée pour définir les props d'écran pour les écrans de la pile racine de votre application.
 * Cette déclaration de type prend un paramètre générique T qui est contraint à être une clé de RootStackParamList.
 * Elle utilise NativeStackScreenProps de React Navigation pour définir les props d'écran pour une pile de navigation.
 * L'argument de type RootStackParamList spécifie les types de paramètres de route possibles dans la pile racine.
 * En fonction de la valeur de T, cette déclaration de type retournera les props d'écran correspondants pour cet écran.
 */

export type RootStackScreenProps<T extends keyof RootStackParamList> = 
    NativeStackScreenProps<RootStackParamList, T>;


// définition des paramètres de route possibles pour les onglets dans l'écran d'accueil
export type TabParamList = {
    Home: undefined;
    Profile: undefined;
    About: undefined;
    Settings: undefined;
};

/**
 * Cette déclaration de type est utilisée pour définir les props d'écran pour les onglets de l'écran d'accueil de votre application.
 * Cette déclaration de type prend un paramètre générique T qui est contraint à être une clé de HomeTabParamList.
 * Elle utilise CompositeScreenProps pour combiner les props d'écran des onglets avec les props d'écran de la pile racine.
 * BottomTabScreenProps spécifie les props d'écran pour les onglets de navigation en bas.
 * RootStackScreenProps est utilisé pour les props d'écran de la pile racine, qui peuvent être utilisés pour la navigation à partir des onglets.
 */

export type HomeTabScreenProps<T extends keyof TabParamList> = CompositeScreenProps <
    BottomTabScreenProps<TabParamList, T>, 
    RootStackScreenProps<keyof RootStackParamList> 
>;

/*
 Cette déclaration étend le namespace ReactNavigation pour inclure une interface RootParamList qui est équivalente à RootStackParamList. 
 Cela permet d'accéder aux types de paramètres de la pile racine de navigation dans tout le projet sans avoir à les importer explicitement.
*/

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}
  