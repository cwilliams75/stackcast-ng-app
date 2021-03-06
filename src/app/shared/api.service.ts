import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "../videos/model/video";
import {UserViewModel} from "../signup/signup.component";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    //BASE URLS
    private BASE_URL = "http://localhost:8080/zc-video-app";
    private BASE_URL_VIDEOS = `${this.BASE_URL}\\videos`;
    private BASE_URL_USERS = `${this.BASE_URL}\\users`;

    //VIDEO ENDPOINTS
    private  ALL_VIDEOS = `${this.BASE_URL_VIDEOS}\\show`;
    private  UPLOAD_VIDEO = `${this.BASE_URL_VIDEOS}\\upload`;

    //USERS ENDPOINTS
    private  CREATE_USER =  `${this.BASE_URL_USERS}\\create`;
    private  FIND_USER_BY_USERNAME =  `${this.BASE_URL_USERS}\\find`;

    constructor(private http: HttpClient) {}


    getAllVideos() : Observable<Video[]>{
        return this.http.get<Video[]>(this.ALL_VIDEOS);
    }

    createUser(user: UserViewModel) : Observable<any>{
        return this.http.post(this.CREATE_USER,user);
    }

    upload(videoName: string ,file: File): Observable<HttpEvent<any>> {

        const formData: FormData = new FormData();

        formData.append('file',file);

        formData.append('videoName',videoName);

        const req = new HttpRequest('POST', 'http://localhost:8080/zc-video-app/videos/upload',formData, {
            reportProgress: true,
            responseType: 'json'
        });

        return this.http.request(req);
    }


}
