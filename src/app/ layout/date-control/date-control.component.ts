import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-date-control',
  templateUrl: './date-control.component.html',
  styleUrls: ['./date-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateControlComponent),
    multi: true
  }]
})
export class DateControlComponent implements ControlValueAccessor {

  month = new FormControl();
  year = new FormControl();
  onChange(_: any) {}
  ngOnInit(): void {
    this.month.valueChanges.subscribe((result) => {
      this.onChange(result);
      this.year.setValue(this.calculateTotalYears(result))
    })
  }

  calculateTotalYears(months: number): string {
    const monthsInYear: number = 12; // Количество месяцев в году
    const years: number = Math.floor(months / monthsInYear);
    const remainingMonths: number = months % monthsInYear;

    return `${years}.${remainingMonths}`;
  }

  writeValue(value: number) {
    this.month.setValue(value)
  }

  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  registerOnTouched() {}
}

