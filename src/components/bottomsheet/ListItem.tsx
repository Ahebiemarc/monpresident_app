import React from "react";
import { Image } from "react-native";
import { Text } from "react-native";
import { StyleSheet, View } from "react-native";
import { Colors } from "../../constants/colors/Colors";
import { IEducation, IOccupation } from "../../interfaces/interfaces";
import { SCREEN_WIDTH } from "../../constants/Constants";
import ListOccupationItem from "./ListOccupationItem";
import ListEducationItem from "./ListEducationItem";

type ListItemProps = {
    itemsEducation?: IEducation[];
    itemsOccupation?: IOccupation[];
    choice: 1 | 2 | 3 |4;
}

export const SPACING = 10

const ListItem = ({itemsEducation, itemsOccupation, choice} : ListItemProps) =>{
    const isChoiceOne = (choice === 1) ;
    const isChoiceTwo = (choice === 2) ;
    const isChoiceTree = (choice === 3) ;
    const isChoiceFour = (choice === 4) ;
    return(
        <View>
            { isChoiceOne && itemsOccupation ? <ListOccupationItem items={itemsOccupation}/>  : null}

            { isChoiceTree && itemsEducation ? <ListEducationItem items={itemsEducation}/>  : null}
        </View>
    );
};


export default ListItem;