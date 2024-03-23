import React from "react";
import { IElector } from "../interfaces/interfaces";
import { Resolver } from "react-hook-form";


// Définition du type pour les valeurs du formulaire

// Résolveur pour la validation des champs
export const resolver: Resolver<IElector> = async (values) => {

    const numberLength = 10

    const errors: { [key: string]: string | { type: string; message: string; } } = {};


    const requiredFields: Array<keyof IElector> = [
        "firstname",
        "lastname",
        "birthdate",
        "gender",
        "phone",
        "occupation",
        "photo",
        //"address",
        "city",
        "country",
        "religion",
        "relationshipStatus"
    ];

      // Vérifier les champs requis et la longueur du numéro de téléphone
      for (const field of requiredFields) {
        if (!values[field]) {
            errors[field] = {
                type: "required",
                message: `Le champ ${field} est obligatoire.`
            };
        } else if (field === "phone" && typeof values[field] === "number") { // Supposant que phone est une chaîne
            if (values[field].toString().length < numberLength) {
                errors[field] = {
                    type: "minLength",
                    message: `Le champ ${field} doit comporter au moins ${numberLength} chiffres.`
                };
            }
            if (values[field].toString().length > numberLength) {
                errors[field] = {
                    type: "maxLength",
                    message: `Le champ ${field} doit comporter au maximum ${numberLength} chiffres.`
                };
            }
        }
    }

    console.log(values);
    

    // Retourner les valeurs et les erreurs
    return {
        values : errors ? {} : values, // Retourner les valeurs saisies par l'utilisateur même en cas d'erreurs
        errors // Object.keys(errors).length > 0 ? errors : {}
    };
}
