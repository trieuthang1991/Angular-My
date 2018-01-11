import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { SystemConstants } from '../Common/system.contants';
import { AuthenServiceService } from './authen-service.service';

import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { Observable } from 'rxjs/Observable'
import { MessageConstants } from '../Common/message.constants';
@Injectable()
export class DataserviceService {
  //Khai báo biến 
  private headers: Headers
  constructor(private _http: Http, private _router: Router, private _Authentication: AuthenServiceService,
    private _NotificationService: NotificationService, private _UtilitiService: UtilityService

  ) { }

  //Khung 
  get(uri: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._Authentication.getLoggedInUser().access_token);
    return this._http.get(SystemConstants.BASE_API + uri, { headers: this.headers }).map(this.extractData);
  }
  post(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._Authentication.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  put(uri: string, data?: any) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._Authentication.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.headers }).map(this.extractData);
  }
  delete(uri: string, key: string, id: string) {
    this.headers.delete("Authorization");
    this.headers.append("Authorization", "Bearer" + this._Authentication.getLoggedInUser().access_token);
    return this._http.put(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.headers }).map(this.extractData);
  }
  postFile(uri: string, data?: any) {
    let newHeader = new Headers();
    newHeader.delete("Authorization");
    newHeader.append("Authorization", "Bearer" + this._Authentication.getLoggedInUser().access_token);
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: newHeader }).map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json;
    return body || {};
  }
  //Xử lý lỗi 
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._NotificationService.printErrorMessage(MessageConstants.SYSTEM_ERROR_MSG);
      this._UtilitiService.navigateToLogin();
    }
    else {
      let errMsg = (error.message) ? error.message : error.status ? `${error.status}-${error.statusText} ` : 'Lỗi hệ thống';
      this._NotificationService.printErrorMessage(errMsg);
      return Observable.throw(errMsg);

    }
  }
}

