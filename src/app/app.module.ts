import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { Footer2Component } from './fore-end/footer2/footer2.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
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

registerLocaleData(zh);

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
    LoginComponent,
    Footer2Component,
    ErrorpageComponent,
    ZorroComponent,
    MainframeComponent,
    DataComponent,
    CommentsComponent,
    LogsComponent,
    ViewsComponent,
    AddCategoryComponent,
    AddArticleComponent,
    ArticlesComponent,
    ForearticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  // 配置 ng-zorro-antd 国际化（文案 及 日期）
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
