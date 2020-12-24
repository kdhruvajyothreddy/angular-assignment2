import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        // Creating a method and expecting a value, which is the text from the form, of type AbstractControl to be passed
        //    (based on Angular API for ValidatorFn) and returning either ValidationErrors or null. 
        //     The method is 'static', so that it can be used from the outside without creating an instance of the class
        if ((control.value as string).indexOf(' ') >=0) { // Checking with the condition 'if' for spaces 
            return { cannotContainSpace: true }; // Returning the value back to the client
        } else {
            return null;            
        } 
    }
}