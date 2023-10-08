import { AfterContentChecked, AfterViewChecked, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { FormValidations } from 'src/app/shared/form-validations';

@Component({
  selector: 'app-message',
  template: `
    <span class="alert-error" *ngIf="hasError">{{ message$ | async }}</span>
  `,
  styles: [`
    span.alert-error {
      font-size: 11px;
      color: red;
    }
  `]
})
export class MessageComponent implements AfterContentChecked {
  
  @Input() control: FormControl;

  private subjectText = new BehaviorSubject<string>('');
  message$ = this.subjectText.asObservable();

  get hasError() {
    return this.control.hasError && this.control.touched;
  }

  get validateControl(): boolean {
    return this.control.dirty || this.control.touched;
  }

  getMessage(): string {
    if (!this.control || !this.control.errors) {
      return '';
    }
    if (this.validateControl) {
      for(const propertyName in this.control.errors) {
        if (this.control.hasError(propertyName)) {
          return FormValidations.getErrorMessage(propertyName);
        }
      }
    }
    return '';
  }

  subjectMessage() {
    const text = this.getMessage();
    this.subjectText.next(text);
  }

  ngAfterContentChecked(): void {
    this.subjectMessage();
  }

}
