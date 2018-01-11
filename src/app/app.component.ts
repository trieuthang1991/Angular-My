import { Component,AfterViewChecked ,ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked  {
  constructor (private elementRef:ElementRef )
  {
    
  }
  ngAfterViewChecked() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/Js/custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}
//Sau khi khởi tạo xong tất cả mới đưa file customer.js vào 
//Có 2 sự kiện là afterviewcheck và afterviewinit