import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WjGridModule } from '@grapecity/wijmo.angular2.grid';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './fore-end/header/header.component';
import { FooterComponent } from './fore-end/footer/footer.component';
import { HomeComponent } from './fore-end/home/home.component';
import { AboutComponent } from './fore-end/about/about.component';
import { BlogComponent } from './fore-end/blog/blog.component';
import { ResumeComponent } from './fore-end/resume/resume.component';
import { AdminComponent } from './back-end/admin/admin.component';
import { CommentComponent } from './back-end/comment/comment.component';
import { ArticleComponent } from './back-end/article/article.component';
import { CategoryComponent } from './back-end/category/category.component';
import { WijmoComponent } from './components/wijmo/wijmo.component';
import { LoginComponent } from './login/login.component';
import { Footer2Component } from './fore-end/footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,

    AboutComponent,
    BlogComponent,
    ResumeComponent,

    AdminComponent,
    CommentComponent,
    ArticleComponent,
    CategoryComponent,
    WijmoComponent,
    LoginComponent,
    Footer2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WjGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
