import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpRequest, HttpResponse, HttpEventType, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class FileService {

  private uploadUrl: string = "http://localhost:8080";
  private subject = new Subject<any>();

  fileUploadNames: Observable<any>;

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File, progress: { percentage: number }) {
    let formdata: FormData = new FormData();
    console.log(formdata)

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.uploadUrl + '/foods', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    this.http.request(req).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        progress.percentage = Math.round(100 * event.loaded / event.total);
        this.subject.next({ upload: 'ok' });
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
  }

  getFiles(): Observable<any> {
    return this.http.get(this.uploadUrl + '/getallfiles');
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

}
