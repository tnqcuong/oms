import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular';
  status: boolean = false;
  show: boolean = false;
  public deploymentName: any;
  showModal(){
    this.show = !this.show;
  }
  fnAddDeploytment(){
    alert(this.deploymentName);
  }

  datas = JSON.parse('{"dataList":[{"id":1,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":2,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":3,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":4,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":5,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":6,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"},{"id":7,"aaa":"aaaaaaaaaaa","bbb":"bbbbbbbbbbbbbbbbb","ccc":"cccccccccccccccccccc","ddd":"dddddddddddddddddddddddddd","eee":"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee","fff":"ffffffffffffffffffffffffffffffffffffff","kkk":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk","mmm":"mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"}]}');
  clickEvent() {
    this.status = !this.status;
  }

  changeData(data :any){
    console.log(data);
  }

}
