import { Component, OnDestroy, OnInit } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.scss'],
})
export class BugsComponent implements OnInit, OnDestroy {

  subscription: any;
  public bugList:  any;
  change: any;

  constructor(private serv: PostServiceService) {}

  ngOnInit(): void {
    this.getData()
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
  getData(){
    this.subscription = this.serv.getData().subscribe(data=>{
      this.bugList = Object.keys(data).map(key=>({type:key, value: data[key]}));
    })
  }

  addBug() {
    const bug ={completion:"Halfway",name:"Bug 2",priority:"Low"}
    this.serv.postData(bug);
    this.getData();
    this.change = "added";
    console.log(this.change);
  }

  editBug(bug_id:string){
    const bug ={completion:"Not Started",name:"EDITED 2 BUG",priority:"Low"}
    this.serv.editData(bug,bug_id);
    this.getData();
    this.change = "edited";
    console.log(this.change);
  }
  deleteBug(bug_id:string){
    this.serv.deleteData(bug_id);
    this.getData();
    this.change = "deleted";
    console.log(this.change);
  }
  }