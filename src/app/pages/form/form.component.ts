import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  productForm: FormGroup;

  get products(): FormArray {
    return this.productForm.get('products') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      products: this.formBuilder.array([]),
    });
  }

  ngOnInit(): void {
    // Добавьте первый пустой элемент в коллекцию
    this.addProduct();
  }

  addProduct(): void {
    const productGroup: FormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
    });

    this.products.push(productGroup);
  }
  removeProduct(index: number): void {
    this.products.removeAt(index);
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const products = this.productForm.value.products;
      console.log(this.productForm.value);
      console.log(this.productForm)
      // Отправка данных на сервер или обработка коллекции товаров
    }
  }
}
