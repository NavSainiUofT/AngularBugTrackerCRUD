import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { 
    
  }

  getData(): Observable<any>{
    const url = "https://bugtrackernavdeep-default-rtdb.firebaseio.com/Bugs/buglist.json";
    return this.http.get<any>(url)
  }

  postData(data: any){
    const url = "https://bugtrackernavdeep-default-rtdb.firebaseio.com/Bugs/buglist.json"
    this.http.post<any>(url,data)
    .subscribe({
      next:(res)=>{
        alert("Bug Added Successfully!")
      },
      error:(err)=>{
        alert("There was an error posting the bug")
      }
    })
  }

  editData(newData: any,key: string){
    const url = "https://bugtrackernavdeep-default-rtdb.firebaseio.com/Bugs/buglist/";
    this.http.put<any>(url+key+".json",newData).subscribe(res => {
      alert("successfully edited bug" + key)
    })
  }

  deleteData(key: string){
    const url = "https://bugtrackernavdeep-default-rtdb.firebaseio.com/Bugs/buglist/";
    this.http.delete<any>(url+key+".json").subscribe(res => {
      alert("successfully deleted bug" + key)
    })
  }
}
