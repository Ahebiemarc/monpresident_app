import React from "react";
import { IElector } from "../interfaces/interfaces";
import { Resolver } from "react-hook-form";


// Définition du type pour les valeurs du formulaire
type FormValues = Partial<IElector>;

// Résolveur pour la validation des champs
export const resolver: Resolver<FormValues> = async (values) => {

    let errors = {};
    if (!values.firstname) {
        errors = {
            ...errors,
            firstname: {
                type: 'required',
                message: "Votre nom est obligatoire"
            },
        };
    };

    if (!values.lastname) {
        errors = {
          ...errors,
            lastname: {
                type:'required',
                message: "Votre prénom est obligatoire"
            },
        };
    };

    if (!values.birthdate) {
        errors = {
        ...errors,
            birthdate: {
                type:'required',
                message: "Votre date de naissance est obligatoire"
            },
        };
    };

    if (!values.gender) {
        errors = {
            ...errors,
               gender: {
                type:'required',
                message: "Le genre est obligatoire"
            },
        }
    };

    if (!values.phone) {
        errors = {
          ...errors,
            phone: {
                type:'required',
                message: "Votre numéro est obligatoire"
            },
        };
    };

    if (!values.occupation) {
        errors = {
          ...errors,
            occupation: {
                type:'required',
                message: "Votre occupation est obligatoire"
            },
        };
    };

    if(!values.photo){
        errors = {
        ...errors,
            photo: {
                type:'required',
                message: "Votre photo est obligatoire"
            },
        };
    };

    if(!values.address){
        errors = {
        ...errors,
            address: {
                type:'required',
                message: "Votre adresse est obligatoire"
            },
        };
    };

    if(!values.city){
        errors = {
        ...errors,
            city: {
                type:'required',
                message: "La ville est obligatoire"
            },
        };
    };

    if(!values.country){
        errors = {
            ...errors,
            country: {
                type:'required',
                message: "Le pays est obligatoire"
            },
        };
    };
    
    if(!values.religion){
        errors = {
          ...errors,
            religion: {
                type:'required',
                message: "La religion est obligatoire"
            },
        };
    };

    if(!values.relationshipStatus){
        errors = {
        ...errors,
            relationshipStatus: {
                type:'required',
                message: "Le statut de la relation est obligatoire"
            },
        };
    }
    
    return {
        values: errors ? {} : values,
        errors,
    }
}
