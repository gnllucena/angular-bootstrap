import { AbstractControl, ValidatorFn } from '@angular/forms';

export const DateValidation = validation();

function validation(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {

    const date = control.value;

    if (!date) {
      return { DateInvalid: { value: date } };
    }

    let regex = RegExp('(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)');

    if (regex.test(date)) {
      return { DateInvalid: { value: date } };
    }

    return null;
  };
}
