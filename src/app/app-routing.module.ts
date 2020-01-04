import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './fore-end/home/home.component';
import { AboutComponent } from './fore-end/about/about.component';
import { ResumeComponent } from './fore-end/resume/resume.component';
import { BlogComponent } from './fore-end/blog/blog.component';
import { AdminComponent } from './back-end/admin/admin.component';
import { ArticleComponent } from './back-end/article/article.component';
import { CategoryComponent } from './back-end/category/category.component';
import { CommentComponent } from './back-end/comment/comment.component';
import { WijmoComponent } from './components/wijmo/wijmo.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },

  { path: 'admin', component: AdminComponent },
  { path: 'admin/article', component: ArticleComponent },
  { path: 'admin/category', component: CategoryComponent },
  { path: 'admin/comment', component: CommentComponent },

  { path: 'wijmo', component: WijmoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
