import { FormControl, FormGroup } from "@angular/forms"
import { FormValidations } from "./form-validations";

fdescribe('FormValidations', () => {
    let form: FormGroup;

    beforeEach(() => {
        form = new FormGroup({
            cpf: new FormControl(null, FormValidations.validateCpf)
        })
    })

    it('deve ser válido', () => {
        form.controls.cpf.setValue('00725580321');
    
        expect(form.valid).toBeTruthy();
    })

    it('deve ser inválido', () => {
        expect(form.invalid).toBeTruthy();
    })

    it('deve ser inválido', () => {
        form.controls.cpf.setValue('00725580322');

        expect(form.invalid).toBeTruthy();
    })
})