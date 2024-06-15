import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { MatSlideToggleModule} from '@angular/material/slide-toggle'
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponentComponent } from './login-component/login-component.component';
import { TwoComponentComponent } from './two-component/two-component.component';

// Angular 模块（无论是根模块还是特性模块）都是一个带有@NgModule装饰器的类。
// 装饰器是用来修饰 JavaScript 类的函数。
// 这种情况下，你同时使用了 Angular 和 JavaScript 的模块化系统。
@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    LoginComponentComponent,
    TwoComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

