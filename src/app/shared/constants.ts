export const registerValidations = { // constants are defined
    password: {
        minLength: 8,
        uppercaseRegex: /[A-Z]/,
        numberRegex: /\d/,
        specialCharRegex: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
    },
};