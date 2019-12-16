import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import {CalculatorComponent} from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import {MathService} from './math.service';
import {RaygunErrorHandler} from './raygun-error-handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MathService,
    {
      provide: ErrorHandler,
      useClass: RaygunErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
