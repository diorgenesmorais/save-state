import { Validators } from "@angular/forms";

export class FormValidations extends Validators {
    static getErrorMessage(
        checktorName: string
    ) {
        const configMessage = {
            required: 'Campo é obrigatório',
            pattern: 'Campo inválido'
        }

        return configMessage[checktorName];
    }
}