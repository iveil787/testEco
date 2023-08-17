import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements OnInit {
  @Input() parentForm!: FormGroup;

  formGroup: FormGroup<{ month: FormControl<number>; year: FormControl<string> }> = new FormGroup({
    month: new FormControl(),
    year: new FormControl(),
  });

  ngOnInit(): void {
    this.parentForm.addControl('date', this.formGroup);
    this.setFormValues()
  }

  setFormValues(): void {
    this.formGroup.controls.month.valueChanges.subscribe(value => {
      this.formGroup.patchValue({
        year: this.calculateTotalYears(value)
      });
    });
  }

  calculateTotalYears(months: number): string {
    const monthsInYear: number = 12; // Количество месяцев в году
    const years: number = Math.floor(months / monthsInYear);
    const remainingMonths: number = months % monthsInYear;

    return `${years}.${remainingMonths}`;
  }
}

