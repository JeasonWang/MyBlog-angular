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
import { LoginComponent } from './login/login.component';
import { ZorroComponent } from './components/zorro/zorro.component';
import { MainframeComponent } from './back-end/mainframe/mainframe.component';
import { DataComponent } from './back-end/data/data.component';
import { CommentsComponent } from './back-end/comments/comments.component';
import { LogsComponent } from './back-end/logs/logs.component';
import { ViewsComponent } from './back-end/views/views.component';
import { AddCategoryComponent } from './back-end/add-category/add-category.component';
import { AddArticleComponent } from './back-end/add-article/add-article.component';
import { ArticlesComponent } from './fore-end/articles/articles.component';
import { ForearticleComponent } from './fore-end/forearticle/forearticle.component';


const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'forearticle', component: ForearticleComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'blog', component: BlogComponent },

  { path: 'back',
   component: MainframeComponent,
   children: [
    { path: '', component : DataComponent },
    { path: 'logs', component : LogsComponent },
    { path: 'comments', component : CommentsComponent },
    { path: 'views', component : ViewsComponent },

    { path: 'admin', component: AdminComponent },
    { path: 'data', component : DataComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'category', component: CategoryComponent },
    { path: 'addcategory', component: AddCategoryComponent },
    { path: 'addarticle', component: AddArticleComponent },
    { path: 'comment', component: CommentComponent },
  ] },

  { path: 'zorro', component: ZorroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
