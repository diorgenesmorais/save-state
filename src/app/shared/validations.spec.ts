import { Validations } from "./validations"

describe('Validations', () => {
    it('deve ser inválido por ser nulo', () => {
        expect(Validations.isCpfInvalid(null)).toBeTruthy();
    })

    it('deve ser inválido por ser uma sequência de número', () => {
        expect(Validations.isCpfInvalid('22222222222')).toBeTruthy();
    })

    it('deve ser válido', () => {
        expect(Validations.isCpfInvalid('00725580321')).toBeFalsy();
        expect(Validations.isCpfInvalid('478.215.840-88')).toBeFalsy();
        expect(Validations.isCpfInvalid('403.580.740-02')).toBeFalsy();
    })

    it('deve ser inválido por...', () => {
        expect(Validations.isCpfInvalid('93.762.735/0001-33')).toBeTruthy();
        expect(Validations.isCpfInvalid('95216670018')).toBeTruthy();
        expect(Validations.isCpfInvalid('95216660017')).toBeTruthy();
        expect(Validations.isCpfInvalid('478.215.841-88')).toBeTruthy();
    })
})