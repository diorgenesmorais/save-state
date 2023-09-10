import { AbstractControl, Validators } from "@angular/forms";
import { Validations } from "./validations";

export class FormValidations extends Validators {
    static getErrorMessage(
        checktorName: string
    ) {
        const configMessage = {
            required: 'Campo é obrigatório',
            pattern: 'Campo inválido',
            cpfInvalid: 'CPF inválido!'
        }

        return configMessage[checktorName];
    }

    static validateCpf = (control: AbstractControl) => {
        return Validations.isCpfInvalid(control.value) ? { cpfInvalid: true } : null;
    }
}