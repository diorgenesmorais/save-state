import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormValidations } from 'src/app/shared/form-validations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  @Input() uuid: string;
  public user: IUser;
  private unsub$ = new Subject();

  suggestedUserList: ReadonlyArray<string> = ['Diorgenes', 'Laudeci', 'Deyvison'];
  form: FormGroup;

  constructor(
    private formBuild: FormBuilder,
    private transferFacade: TransferFacade
  ) { }

  ngOnInit() {
    this.transferFacade.users$
      .pipe(takeUntil(this.unsub$))
      .subscribe(users => {
        this.user = users.find(u => u.uuid == this.uuid);
      });
    this.formControll();
  }

  private getValueField(field: string) {
    return this.user && this.user[field] ? this.user[field] : '';
  }

  private formControll() {
    this.form = this.formBuild.group({
      NOME: [this.getValueField('name'), Validators.required],
      EMAIL: [this.getValueField('email'), [Validators.required, Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+/)]],
      CPF: [this.getValueField('cpf'), FormValidations.validateCpf],
      WANT_INFO: [this.getValueField('wantInfo')]
    });
  }

  public save() {
    this.user = {
      ...this.user,
      name: this.form.controls.NOME.value,
      cpf: this.form.controls.CPF.value,
      email: this.form.controls.EMAIL.value,
      wantInfo: this.form.controls.WANT_INFO.value
    }
    this.transferFacade.saveUser(this.user);
  }

  public remove() {
    this.transferFacade.removeUser(this.user);
  }

  ngOnDestroy() {
    this.unsub$.next();
    this.unsub$.complete();
  }

  get forms() {
    return this.form.controls;
  }
}
