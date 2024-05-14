import React, { useRef, useState } from "react";
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IElector } from "../interfaces/interfaces";
import Input from "../components/signupInputs/Input";
import { Colors } from "../constants/colors/Colors";
import DatePicker from "../components/signupInputs/DatePicker";
import { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { IFormError, validateForm } from "../utils/errorInput";
import Select from "../components/signupInputs/Select";
import { TextInput } from "react-native";



const Signup = () => {

    const [formData, setFormData] = useState<IElector>({
        cin: '',
        firstname: '',
        lastname: '',
        birthday: new Date(),
        gender: '',
        email: '',
        phone: '0779770733',
        occupation: '',
        photo: '',
        address: '',
        city: '',
        country: '',
        religion: '',
        relationshipStatus: '',
    });

    const [formErrors, setFormErrors] = useState<IFormError>({});
    //const [isFormValid, setIsFormValid] = useState(false);
    const cinRef = useRef<TextInput>(null);
    const firstnameRef = useRef<TextInput>(null);
    const lastnameRef = useRef<TextInput>(null);

    const handlInputChange = (name: keyof IElector, value: string | Date) => {
        //Met à jour la valeur du champ dans formData
        setFormData({...formData, [name] : value})
        
        // Efface l'erreur pour le champ en cours de modification si elle existe
        if (formErrors[name]) {
            setFormErrors({...formErrors, [name]: undefined})
        }
        // Valide le formulaire à chaque modification du champ
        //setIsFormValid(validateForm(formData, setFormErrors));
    }

    const  handleSubmit = () =>{
        if (validateForm(formData, setFormErrors)) {
            console.log(formData);
            
        }
        
    }


    const onChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) =>{
        if (event.type == 'set') {
            const currentDate = selectedDate  || formData.birthday
            //const dateFormat = format(currentDate, 'dd/MM/yyyy', {locale: fr});
            setFormData({...formData, birthday: currentDate})
            //setDate(currentDate);
            //setIsFormValid(validateForm(formData, setFormErrors));

            if (Platform.OS === "android") {
                //toggleShowPicker();
                //const dateFormat = format(currentDate, 'dd/MM/yyyy', {locale: fr});
                setFormData({...formData, birthday: currentDate})
            }
        }
    };

    const handleNextField = (nextField: React.RefObject<TextInput> | null)=> {
        if(nextField  && nextField.current){
            nextField.current.focus(); // Passe au champ suivant
        }
    }

   

    return (
        <SafeAreaView style={styles.container}>
            <View style={{margin: 20}}>
                <Text style={styles.title}>Enrollez vous pour l'élection</Text>
                <Text style={styles.titleFine}>Entrez vos différents informations</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator contentContainerStyle={{padding:20,}}>
                <Input 
                 ref={cinRef}
                 label="CIN"
                 placeholder="CI200009"
                 value={formData.cin}
                 onChangeText={(value) => handlInputChange('cin', value)}
                 errorMessage={formErrors.cin}
                 onSubmitEditing={()=> handleNextField(firstnameRef) }
                />
                <Input 
                ref={firstnameRef}
                 label="Nom"
                 placeholder="Ali"
                 value={formData.firstname}
                 onChangeText={(value) => handlInputChange('firstname', value)}
                 errorMessage={formErrors.firstname}
                />
                <Input 
                 ref={lastnameRef}
                 label="Prénom"
                 placeholder="Ouattara"
                 value={formData.lastname}
                 onChangeText={(value) => handlInputChange('lastname', value)}
                 errorMessage={formErrors.lastname}
                />
                <DatePicker
                 
                 label="Date de naissance"
                 date={formData.birthday}
                 valueText={format(formData.birthday, 'dd/MM/yyyy', {locale: fr})}
                 onChangeText={(text) => handlInputChange('birthday', text)}
                 onChange={onChange}
                 errorMessage={formErrors.birthday}
                />

                <Select
                  label="Genre"
                  selectedValue={formData.gender}
                  onValueChange={(itemValue, itemIdex) => handlInputChange('gender', itemValue)}
                  items={[
                    {label: 'Homme', value: 'homme'},
                    {label: 'Femme', value: 'femme'}
                  ]}
                  errorMessage={formErrors.gender}
                />

                <Input 
                 label="Email"
                 placeholder="test@example.com"
                 value={formData.email}
                 onChangeText={(text) => handlInputChange('email', text)}
                 errorMessage={formErrors.email}
                />

                <Input 
                 label="Phone"
                 placeholder="0758454590"
                 value={formData.phone}
                 onChangeText={(text) => handlInputChange('phone', text)}
                 errorMessage={formErrors.phone}
                />

                <Input 
                 label="Occupation"
                 placeholder="Ingénieur en cybersécurité"
                 value={formData.occupation}
                 onChangeText={(text) => handlInputChange('occupation', text)}
                 errorMessage={formErrors.occupation}
                />

                <Input 
                 label="photo"
                 placeholder="aaaa.jpg"
                 value={formData.photo}
                 onChangeText={(text) => handlInputChange('photo', text)}
                 errorMessage={formErrors.photo}
                />
                <Input 
                 label="adresse"
                 placeholder="Cocody Avenue Dunkan"
                 value={formData.address}
                 onChangeText={(text) => handlInputChange('address', text)}
                 errorMessage={formErrors.address}
                />
                <Input 
                 label="Ville"
                 placeholder="Munich"
                 value={formData.city}
                 onChangeText={(text) => handlInputChange('city', text)}
                 errorMessage={formErrors.city}
                />

                <Input 
                 label="Pays"
                 placeholder="Allemagne"
                 value={formData.country}
                 onChangeText={(text) => handlInputChange('country', text)}
                 errorMessage={formErrors.country}
                />
                <Input 
                 label="Religion"
                 placeholder="Chrétien"
                 value={formData.religion}
                 onChangeText={(text) => handlInputChange('religion', text)}
                 errorMessage={formErrors.religion}
                />

                <Select 
                 label=" Statut Matrimonial"
                 selectedValue={formData.relationshipStatus}
                 onValueChange={(itemValue, itemIdex) => handlInputChange('relationshipStatus', itemValue)}
                 items={[
                    {label: 'Marié', value:'marié'},
                    {label: 'Divoré', value: 'divoré'},
                    {label: 'Célibataire', value: 'célibataire'},
                    {label: 'Veuf / Veuve', value: 'veuf / veuve'}
                  ]}
                />


            </ScrollView>
            <TouchableOpacity style={styles.button} activeOpacity={0.7}>
                <Text style={styles.buttonText}>S'enregistrer</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title:{
        fontSize: 32,
        fontFamily: 'Poppins-Bold',
        letterSpacing: 1.5,
        color: Colors.blueDark,
    },
    titleFine:{
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: Colors.kaki,
        letterSpacing: 1.5,
    },
    button:{
        backgroundColor: Colors.blueDark,
        paddingHorizontal: 10,
        paddingVertical:20,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,

    },
    buttonText:{
        fontFamily:'Poppins-Medium', 
        fontSize: 18, 
        textAlign: 'center', 
        color:Colors.white,
        letterSpacing: 2,
    }

});

export default Signup;