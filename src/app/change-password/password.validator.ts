import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    
    // Creating methods for custom validations
    // Custom validation to check if the old password equivalent to 'dhruv'
    static isOldPasswordValid(control: AbstractControl) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value !== "dhruv") {
                    resolve({ isOldPasswordValid:true });
                } else {
                    resolve(null);
                }
            }, 1000);
        });
    }

    // Custom validation to check if the value of newPassword is equivalent to confirmPassword
    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value != confirmPassword.value) {
            return { passwordsShouldMatch: true };
        } else {
            return null;
        }
    }
}