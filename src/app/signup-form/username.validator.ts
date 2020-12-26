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

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        // Creating a method for custom validation, just as the above method "cannotContainSpace"
        return new Promise((resolve, reject) => { // API to use to return a "Promise" for any custom asynchronous validator
            setTimeout(() => {
                if (control.value === "dhruv") { // Simulate to check the username availability with the server for a single username "dhruv"
                    resolve({ shouldBeUnique:true });
                } else {
                    resolve(null);
                } 
            }, 2000); // Setting timeout function with timer in milliseconds while connecting to the server while performing an operation
        });
    } 
}