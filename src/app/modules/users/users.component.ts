import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferFacade } from 'src/app/core/services/transfer.facade';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

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
      WANT_INFO: [this.getValueField('wantInfo')]
    });

    this.form.controls.NOME.valueChanges
      .pipe(takeUntil(this.unsub$))
      .subscribe(value => {
        if (value) {
          this.form.controls.NOME.setValue(value.toUpperCase());
        }
      })
  }

  public save() {
    this.user = {
      ...this.user,
      name: this.form.controls.NOME.value,
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
}
