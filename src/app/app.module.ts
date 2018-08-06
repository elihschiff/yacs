import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRouterModule } from './app-router/module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/component';
import { NavUserComponent } from './header/nav-user/component';
import { NoticeBarComponent } from './notice-bar/component';
import { FooterComponent } from './footer/component';

import { SidebarModule } from './sidebar/module';
import { SchoolViewModule } from './school-view/module';
import { CourseViewModule } from './course-view/module';
import { ScheduleViewModule } from './schedule-view/module';
import { CourseListModule } from './course-list/module';

import { ConstantsService } from './services/constants';
import { SelectionService } from './services/selection.service';
import { ConflictsService } from './services/conflicts.service';
import { NoticeService } from './services/notice.service';
import { UserService } from './services/user.service';

import { AboutComponent } from './about/component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRouterModule,
    NgbModule.forRoot(),
    SchoolViewModule,
    CourseViewModule,
    ScheduleViewModule,
    CourseListModule,
    SidebarModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NoticeBarComponent,
    FooterComponent,
    AboutComponent,
    NavUserComponent
  ],
  providers: [
    ConstantsService,
    SelectionService,
    ConflictsService,
    NoticeService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
