import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-animatable";
import { Colors } from "../../constants/colors/Colors";
import { Picker } from "@react-native-picker/picker";

interface SelectProps {
    label: string;
    selectedValue: string;
    onValueChange: (itemValue: string, itemIndex: number) => void;
    items: {label: string, value: string}[];
    errorMessage?: string;
}


const Select:React.FC<SelectProps> = ({label, selectedValue, onValueChange, items, errorMessage}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={styles.picker}
            itemStyle={{fontSize: 16,fontFamily: 'Poppins-Regular',}}
            >

                {items.map((item) => (
                    <Picker.Item key={item.value} label={item.label} value={item.value} />
                ))}

            </Picker>

            {errorMessage && <Text style={styles.errorText}> {errorMessage} </Text>}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
        marginTop: 20
    },
    label: { 
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        letterSpacing: 1.5,
        color: Colors.black,
        marginBottom: 5,
    },
    textInput: {
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
        padding: 15,
        borderRadius: 8,
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
    },
    picker: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        width: '100%',
        padding:15,
        backgroundColor: 'rgba(0,0,0,0.1)',

      },
    errorText: {
        color: 'red',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginTop:5,
    },
    
});

export default Select;