import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import { IOccupation } from "../../interfaces/interfaces";
import { SCREEN_WIDTH } from "../../constants/Constants";

type ListOccupationItemProps = {
    items: IOccupation[];
}

export const SPACING = 10

const ListOccupationItem = ({items} : ListOccupationItemProps) =>{
    return(
        <View>
            {items.map((item, index) => {
                return(
                    <View style={styles.container} key={index}>
                        <View style={styles.logoContainer}>
                            <Image source={item.logo} style={styles.logo}/>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.societyName}>{item.societyName}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.occupation}>{item.occupation}</Text>
                                <Text style={styles.date}>{` | ${item.date}`}</Text>
                            </View> 
                        </View>
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: SPACING,
        paddingVertical: SPACING + 5,
        paddingRight: 5,
        width: SCREEN_WIDTH ,
        borderRadius: 50,
        paddingLeft: 30,
    },
    logoContainer:{
        borderRadius: 50,
        marginLeft: SPACING 
    },
    logo: {
        width: SPACING * 5,
        height: SPACING * 5,
        resizeMode: 'contain',
    },
    societyName: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: Colors.black,
        letterSpacing: 2 
    },
    occupation: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: Colors.black, 
    },
    date: {
        fontFamily: 'Poppinps-Medium',
        fontSize: 14,
        color: Colors.darkOpacity, 
    }
})

export default ListOccupationItem;