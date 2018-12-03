import { AbstractControl, ValidatorFn } from '@angular/forms';

export const CpfValidation = validation();

function validation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const cpf = control.value;

    if (!cpf) {
      return null;
    }

    const value = cpf.replace(/[^0-9]/g, '');

    if (value.length !== 11) {
      return { invalid: { value: cpf } };
    }

    if ((value === '00000000000') ||
        (value === '11111111111') ||
        (value === '22222222222') ||
        (value === '33333333333') ||
        (value === '44444444444') ||
        (value === '55555555555') ||
        (value === '66666666666') ||
        (value === '77777777777') ||
        (value === '88888888888') ||
        (value === '99999999999')) {

      return { invalid: { value: cpf } };
    }

    let j: number = 10;
    let somatorio: number = 0;
    let numero: number = 0;
    let resto: number = 0;
    let digito1: number = 0;
    let digito2: number = 0;

    let caracter: string = '';
    let auxiliar: string = '';

    auxiliar = value.substring(0, 9);

    for (let i: number = 0; i < 9; i++) {
      caracter = auxiliar.charAt(i);

      numero = Number(caracter);
      somatorio = somatorio + (numero * j);

      j--;
    }

    resto = somatorio % 11;
    digito1 = 11 - resto;

    if (digito1 > 9) {
      digito1 = 0;
    }

    j = 11;
    somatorio = 0;
    auxiliar = auxiliar + digito1;

    for (let i: number = 0; i < 10; i++) {
      caracter = auxiliar.charAt(i);

      numero = Number(caracter);
      somatorio = somatorio + (numero * j);

      j--;
    }

    resto = somatorio % 11;
    digito2 = 11 - resto;

    if (digito2 > 9) {
      digito2 = 0;
    }

    auxiliar = auxiliar + digito2;

    if (cpf !== auxiliar) {
      return { invalid: { value: cpf } };
    }

    return null;
  };
}
