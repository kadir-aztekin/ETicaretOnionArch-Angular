import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toaster:ToastrService) { }
  message(message: string,title: string,messageType: ToastrMessageType,position:ToastrPosition){
    this.toaster[messageType](message,title,{
      positionClass:position,
    })
}
}
export enum ToastrMessageType{
  Success ="success",
  Info="info",
  Warning="warning",
  Error="error" 
}
export enum ToastrPosition{
  TopRight = "toastr-top-right",
  BottomLeft ="toastr-bottom-left",
  ButtomLeft = "toastr-buttom-left",
  TopLeft="toastr-top-left",
  TopFullWidth = "toastr-top-fullwidth",
  BottomFullWidth = "toastr-bottom-full-width",
  TopCenter = "toastr-top-center",
  BottomCenter = "toastr-bottom-center",

}
