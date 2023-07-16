import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() user: IUser;

  @Output() publishEvent = new EventEmitter<IUser>();

  suggestedUserList = ['Diorgenes', 'Laudeci', 'Deyvison'];
  form: FormGroup;

  constructor(
    private formBuild: FormBuilder
  ) { }

  ngOnInit() {
    this.formControll();
  }

  private formControll() {
    this.form = this.formBuild.group({
      NOME: [this.user.name, Validators.required],
      EMAIL: [this.user.email, [Validators.required, Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+/)]],
      WANT_INFO: [this.user.wantInfo]
    });
  }

  public save() {
    this.user = {
      ...this.user,
      name: this.form.controls.NOME.value,
      email: this.form.controls.EMAIL.value,
      wantInfo: this.form.controls.WANT_INFO.value
    }
    this.publishEvent.emit(this.user);
  }
}
