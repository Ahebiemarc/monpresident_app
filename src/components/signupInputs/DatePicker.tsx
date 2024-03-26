import React, { useState } from "react";
import { Button, Platform, Pressable, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-animatable";
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Colors } from "../../constants/colors/Colors";


interface DatePickerProps {
    label: string;
    valueText: string;
    date: Date;
    onChange: (event: DateTimePickerEvent, date: Date | undefined) => void;
    errorMessage?: string;
    onChangeText?: (text: string) => void;


}

const DatePicker:React.FC<DatePickerProps> = ({label, valueText, date, onChange, onChangeText, errorMessage})=> {
    //const [date, setDate] = useState(new Date());
    //const [dateOfbirth, setDateOfBirth] = useState('');
    const [show, setShow] = useState(false);

    const toggleShowPicker = () => {
        setShow(!show);
    }

    console.log(show);

    const handleonChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) =>{
        toggleShowPicker();
        onChange(event, selectedDate);

    }
    
    
    return (
        <View  style={styles.container}>
            <Text style={styles.label}>{label}</Text>            
                <Pressable
                onPress={toggleShowPicker}
            >
                <TextInput
                    style={styles.textInput}
                    value={valueText}
                    placeholder="23/01/2002"
                    onChangeText={onChangeText}
                    editable={false}
                />
            </Pressable>
            

            {show && (
                <DateTimePicker
                testID="datePicker"
                mode="date"
                display="spinner"
                value={date}
                onChange={handleonChange}
                locale="fr"
   
               />
            )}
            {errorMessage && <Text style={styles.errorText}> { errorMessage }</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    label: { 
        fontSize: 16,
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
    errorText: {
        color: 'red',
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginTop: 5,
    },
});

export default DatePicker;