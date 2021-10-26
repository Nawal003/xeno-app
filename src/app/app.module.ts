import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { QuestionComponent } from './pages/question/question.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { IdComponent } from './pages/id/id.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { QuestionsPipe } from './system/pipes/questions.pipe';
import { QuestionsService } from './system/services/questions.service';
import { AuthInterceptor } from './system/security/auth.interceptor';
import { Auth401Interceptor } from './system/security/auth401.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionComponent,
    ResultatsComponent,
    ProfilComponent,
    IdComponent,
    AccueilComponent,
    QuestionsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [QuestionsService, {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true}, {provide: HTTP_INTERCEPTORS, useClass:Auth401Interceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
