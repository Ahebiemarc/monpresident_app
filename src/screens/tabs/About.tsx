import LottieView from "lottie-react-native";
import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../constants/Constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/colors/Colors";


const About = () => {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar barStyle={'default'}/>
            <LottieView 
                source={require('../../../assets/lotties/about_us.json')}
                style={styles.lottie}
                autoPlay
                loop={true}
                //speed={0.5}
                /> 
            <View style={styles.containerContent}>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>A propos de nous</Text>
                <Text style={styles.description}>Bienvenue sur l'application de vote présidentiel, votre source de confiance pour tout ce qui concerne les élections présidentielles. Notre mission est de fournir des informations précises et impartiales sur les candidats, les enjeux électoraux et le processus de vote. Que vous soyez un électeur curieux, un passionné de politique ou simplement intéressé par les élections, notre application est conçue pour vous fournir les informations dont vous avez besoin.</Text>
                <Text style={styles.title}>Notre Objectif</Text>
                <Text style={styles.description}>Notre objectif principal est de promouvoir une participation électorale informée et engagée. Nous croyons en l'importance de chaque voix dans le processus démocratique et nous nous efforçons de fournir les ressources nécessaires pour que chacun puisse prendre des décisions éclairées lors des élections présidentielles.</Text>
                <Text style={styles.title}>Notre engagement envers l'intégrité</Text>
                <Text style={styles.description}>Nous nous engageons à maintenir des normes élevées d'intégrité et d'impartialité dans toutes nos activités. Notre contenu est soigneusement vérifié et fact-checké pour garantir son exactitude et sa fiabilité. Nous sommes indépendants de tout parti politique ou groupe d'intérêt et notre objectif est de fournir des informations objectives et équilibrées à nos utilisateurs.</Text>
                <Text style={styles.title}>Contactez-nous</Text>
                <Text style={styles.description}>Si vous avez des questions, des commentaires ou des préoccupations, n'hésitez pas à nous contacter. Nous sommes là pour vous aider et nous apprécions vos retours. Vous pouvez nous joindre par e-mail à [adresse e-mail] ou via nos réseaux sociaux.</Text>
                <Text style={[styles.description, {marginTop: 10}]}>Merci de choisir notre application pour rester informé et engagé dans le processus démocratique. Ensemble, nous pouvons faire la différence !</Text>
                <View style={{height: 120}}></View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    },
    lottie: {
        width: 200,
        height: 200,
        aspectRatio: 1,
    },

    containerContent:{
        position: 'absolute',
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        //backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20
    },
    title: {
        marginTop: 20,
        marginBottom: 10,
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: Colors.black,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        paddingHorizontal: 10, 
        paddingVertical: 10,

    }, 
    description: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        letterSpacing: 1.1,
        color: Colors.black,
    },
    scrollView: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    }

});

export default About;