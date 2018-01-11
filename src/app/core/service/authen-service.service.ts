import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { SystemConstants } from '../Common/system.contants';
import 'rxjs/add/operator/map';
import { LoggedInUser } from "../donmain/loggedin.user"
@Injectable()
export class AuthenServiceService {

  constructor(private _http: Http) { }

  //Khung
  //Đăng nhập
  login(username: string, password: string) {
    let body = "username=" + encodeURIComponent(username) +
      "&password=" + encodeURIComponent(password) + "&grant_type=password";
    let hearders = new Headers();
    hearders.append("Content-Type", "application/x-www-form-urlencoded");
    let options = new RequestOptions({ headers: hearders });
    return this._http.post(SystemConstants.BASE_API + '/api/oauth/token', body, options).map((response: Response) => {
      let user: LoggedInUser = response.json();
      if(user && user.access_token != null)
      {
        localStorage.removeItem(SystemConstants.CURRENT_USER);
        localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
      }
    }
    )
  }
  //Đăng xuất
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }
  //Kiểm tra sự tồn tại
  isUserAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if(user != null)
    {
      return true;
    }
    else
    return false;
  }
  //Lấy dữ liệu ra
  getLoggedInUser(): LoggedInUser {
   let user : LoggedInUser;
   if(this.isUserAuthenticated())
   {
       var UserData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
       user = new LoggedInUser(UserData.access_token,UserData.username,UserData.fullName,UserData.email,UserData.avatar);
   }
   else
   user=null;
   return user;
  }
}
