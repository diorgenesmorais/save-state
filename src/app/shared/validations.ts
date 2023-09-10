import * as FormatTo from './format-to';

export class Validations {
    static rejectSequence = (value: string): boolean => {
        if (value) {
            const newValue = FormatTo.removeNonDigits(value);
            return /^(\d)\1+$/.test(newValue);
        }
        return false;
    }

    private static getIndexNumber = (cpf: string, index: number) => Number(cpf.charAt(index));

    private static accumulator = (cpf: string, verifyingDigit: number): number => {
        let acc = 0;
        for(let i = 0; i < 9; i++) {
            acc += Validations.getIndexNumber(cpf, i) * verifyingDigit;
            verifyingDigit--;
        }
        return acc;
    }

    private static getWeight = (weight: number) => (weight >= 10) ? 0 : weight;

    static isCpfInvalid = (cpf: string): boolean => {
        cpf = FormatTo.removeNonDigits(cpf);

        if (!cpf) {
            return true;
        }

        if (Validations.rejectSequence(cpf)) {
            return true;
        }

        const length = cpf.length;
        if (length != 11) {
            return true;
        }

        let sum = Validations.accumulator(cpf, 10);
        let weight = 11 - (sum % 11);
        let ten = Validations.getWeight(weight);

        sum = Validations.accumulator(cpf, 11);
        weight = 11 - ((sum + (ten * 2)) % 11);

        let unit = Validations.getWeight(weight);

        if (ten != Validations.getIndexNumber(cpf, length - 2) || unit != Validations.getIndexNumber(cpf, length - 1)) {
            return true;
        }
    
        return false;
    }
}