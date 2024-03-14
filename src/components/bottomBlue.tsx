import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SCREEN_WIDTH } from "../constants/Constants";
import { Colors } from "../constants/colors/Colors";
import Feather from "react-native-vector-icons/Feather";


type BottomBlueProps = {
    name: string;
    onPress: () => void;
}

const BottomBlue = ({name, onPress}: BottomBlueProps) => {

    //const [data, setData] = useState({})
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={onPress} >
            <View  style={styles.hyphen} />
            <View style={styles.contentContainer}>
                <View style={{padding: 0 , margin: 5,}}>
                    <Feather name="user" size={24} color={Colors.black} />
                    <Feather name="users" size={30} color={Colors.black} />
                </View>
            
                <Text style={styles.text}>Apprenez plus sur votre président {name}</Text>
                <Feather name="arrow-up" size={24} color="white" style={{margin:5}} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",   
        left: 0,
        right: 0,
        bottom: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        justifyContent: "center",
        backgroundColor: '#6468e7',
        height: 100,
        width: SCREEN_WIDTH,
        paddingHorizontal:  10,
    },
 
      text: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        letterSpacing: 3,
        color: Colors.white,
        textAlign: 'center',
      },
      contentContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      },
      hyphen: {
        position: 'absolute',
        top: 15,
        left: (SCREEN_WIDTH / 2) - 20,
        height: 3,
        width: 50,
        backgroundColor: Colors.white,
        marginBottom: 5,
      }

});

export default BottomBlue;