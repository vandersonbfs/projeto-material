import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

export const appRoutes: Routes = [
  { path: '', component: FormComponent }, 
  // Define a rota padrão
  { path: 'form', component: FormComponent } 
  // Rota para o formulário
];