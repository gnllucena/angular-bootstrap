import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ToastService {
  
  private options = {
    timeOut: 3000,
    extendedTimeOut: 1500,
    tapToDismiss: true,
    progressBar: true
  };

  constructor(private toastr: ToastrService) { }
  
  success(message: string, title: string = '') {
    this.toastr.success(message, title, this.options);
  }

  alert(message: string, title: string = '') {
    this.toastr.warning(message, title, this.options);
  }

  error(message: string, title: string = '') {
    this.toastr.error(message, title, this.options);
  }
}
