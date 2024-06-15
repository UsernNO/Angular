import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {
  // activeTab 是一个字符串类型的属性，初始值为 'phone'。这表示当前激活的标签页默认是 'phone'。
    activeTab : string = 'phone';
    // // 设置当前激活的标签为传入的标签
    // setActiveTab 是一个方法,用于设置 activeTab 的值。
    // tab: string 是这个方法的参数，表示传入的标签页名称，类型为字符串。
    // this.activeTab = tab; 这行代码将传入的 tab 值赋给 activeTab，从而更新当前激活的标签页。
    setActiveTab(tab:string){
      this.activeTab = tab;
      console.log(this.activeTab,"看看里面有什么")
    }

}
