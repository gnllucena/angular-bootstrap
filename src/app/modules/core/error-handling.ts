import { ErrorHandler, Injector, Inject } from '@angular/core';
import { ToastService } from '../../services/toast.service';
   
export class ErrorHandling implements ErrorHandler {
  private toastService: ToastService

  constructor(
    @Inject(Injector) private injector: Injector,
  ) {
    this.toastService = this.injector.get(ToastService);
  }

  public handleError(error: any): void {
    if (error instanceof ErrorEvent) {
      this.toastService.error("Your code has an error: ${ error.message } <br> On line: ${ error.lineno } <br> On file: ${ error.filename }", "Test your code!!1!");
    }
  }
}