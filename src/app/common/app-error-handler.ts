import { ErrorHandler } from "@angular/core"

export class AppErrorHandler implements ErrorHandler {  // Creating a global error handler
    handleError(error) {
        alert("An unexpected error occurred");
        console.log(error);
    }
}