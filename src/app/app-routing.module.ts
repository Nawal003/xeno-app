import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { IdComponent } from './pages/id/id.component';
import { QuestionComponent } from './pages/question/question.component';
import { QuestionsComponent } from './pages/questions/questions.component';
import { ResultatsComponent } from './pages/resultats/resultats.component';
import { AuthGuard } from './system/security/auth.guard';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'questions', component: QuestionsComponent, children: [
      { path: ':id', component: QuestionComponent },
      { path: 'resultats', component: ResultatsComponent },
    ]
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], canLoad: [AuthGuard] },

  { path: 'id', component: IdComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
