import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

constructor(private spinner:NgxSpinnerService){}
showSpinner(spinnerType:SpinnerType){
  this.spinner.show(spinnerType);
  setTimeout(() => this.hideSpinner(spinnerType),1000);
}
hideSpinner(spinnerNameType:SpinnerType){
  this.spinner.hide(spinnerNameType);
}
}

export enum SpinnerType{
  ballAtom="s1",
  ballScaleMultiple="s2",
  ballSpinClockwisefade="s3",
}
