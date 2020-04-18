import { Component, OnInit } from '@angular/core';
import {DAOUser} from "../signup/signup.component";
import {ApiService} from "../shared/api.service";
import {Video} from "../videos/model/video";
import {Comment} from "../videos/model/comment";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    userModel: DAOUser = undefined;
    allVideos: Video[] = [];
    allComments: Comment[] = [];
    isShow:Boolean = false;
    videoId: number = 0;

    commentModel:Comment = {
        commentId: undefined,
        message: "",
        userId: undefined,
        video: undefined
    };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserDetails(sessionStorage.getItem('username')).subscribe(
        data => {
            this.userModel = data;
            this.getAllUserVideos();
        }
    );
  }

    public getAllUserVideos(){
        console.log('yes');
        this.apiService.getAllUserVideos(this.userModel.id).subscribe(
            res => {
                this.allVideos = res;
            },
            err => {
                alert("An error has occurred fetching videos!");
            });
    }

    toggleHiddenDiv() {
        this.isShow = !this.isShow;
    }

    onVideoSelect(number) {
        this.videoId = number;
        this.apiService.getAllCommentsFromVideo(this.videoId).subscribe(
            res => {
                this.allComments = res;
            },
            err => {
                alert("An error has occurred fetching comments!");
            });
        console.log(this.videoId);
    }

    public addCommentToVideo(videoId:number,){
        this.apiService.addCommentToVideo(videoId,this.commentModel).subscribe(
            res => {
                location.reload();
            },
            error => {
                alert("Error saving comment!");
            }
        );
    }

}
