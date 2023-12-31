import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LikeButtonService } from './like-button.service';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input('Print-logs') GenerateLog: boolean = false; 
  @Output('change') change = new EventEmitter;

  constructor(private likeButtonService: LikeButtonService){}

  counter(){
    this.likeButtonService.likescounter();
    this.change.emit();                      //this will emit that this method is called.
  }

  logInfo(){
    if(this.GenerateLog === true){
      console.log("This page is liked by user")
    }
  }

  get likesCount() {
    //likesCount() is not a method name but a property, we are getting it's value here.
    return this.likeButtonService.getLikesCount();
  }

  get buttonStatus() {
    return this.likeButtonService.getButtonStatus();
  }

  /*We don't get updated values like this, it will fetch the original values not the updated one.
  likesCount = this.homepageService.getLikesCount; */
}
