import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { IEducation } from "../../interfaces/interfaces";
import { SPACING } from "./ListOccupationItem";
import { SCREEN_WIDTH } from "../../constants/Constants";
import { Colors } from "../../constants/colors/Colors";

type ListEducationItemProps = {
    items: IEducation[];
}

const ListEducationItem = ({items} : ListEducationItemProps) =>{
    return(
        <View>
            {items.map((item, index) => {
                return(
                    <View style={styles.container} key={index}>
                        <View style={styles.logoContainer}>
                            <Image source={item.logo} style={styles.logo}/>
                        </View>
                        <View style={{marginLeft: 20}}>
                            <Text style={styles.nameOfschool}>{item.nameOfschool}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={styles.city}>{item.city}</Text>
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
        //justifyContent: 'center',
        marginTop: SPACING,
        paddingVertical: SPACING + 5,
        paddingRight: 5,
        width: SCREEN_WIDTH ,
        borderRadius: 50,
        paddingLeft: 30,

    },
    logoContainer:{
        borderRadius: 50,
        marginLeft: SPACING, 
    },
    logo: {
        width: SPACING * 5,
        height: SPACING * 5,
        resizeMode: 'contain',
    },
    nameOfschool: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        color: Colors.black,
        letterSpacing: 2 
    },
    city: {
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

export default ListEducationItem;