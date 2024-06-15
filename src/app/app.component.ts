import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // encapsulation:ViewEncapsulation.None //设置局部样式，使用属性选择器
})
export class AppComponent {
  title = 'new_Angular_leaning';
}
