import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CollapseModule, PaginationModule, AlertModule, ModalModule, ButtonsModule, BsDropdownModule } from 'ngx-bootstrap';
import { MomentModule } from 'angular2-moment';
import { FileUploadModule } from 'ng2-file-upload';

// services
import { AccountService } from './account.service';
import { NavigationService } from './navigation.service';
import { SpaceService } from './space.service';
import { TexturesService } from './textures.service';
import { GeometriesService } from './geometries.service';
import { DingsService } from './dings.service';
import { ApiService } from './api.service';
import { InfosService } from './infos.service';
import { RobotService } from './robot.service';

// pipes
import { ConvertTimezonePipe } from './convert-timezone.pipe';
import { ArithmeticRGBtoHEXPipe } from './arithmetic-rgb-to-hex.pipe';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { NavPrivateComponent } from './nav-private/nav-private.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserviewComponent } from './userview/userview.component';
import { SpacesComponent } from './spaces/spaces.component';
import { SpaceEditComponent } from './space-edit/space-edit.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapEditComponent } from './map-edit/map-edit.component';
import { MakerDashboardComponent } from './maker-dashboard/maker-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { TexturesComponent } from './textures/textures.component';
import { GeometriesComponent } from './geometries/geometries.component';
import { DingsComponent } from './dings/dings.component';
import { DeskEditComponent } from './desk-edit/desk-edit.component';
import { MapOptimizerComponent } from './map-optimizer/map-optimizer.component';
import { InfoEditComponent } from './info-edit/info-edit.component';
import { MapLoginComponent } from './map-login/map-login.component';
import { MapViewComponent } from './map-view/map-view.component';
import { RobotsComponent } from './robots/robots.component';
import { SpaceSearchComponent } from './space-search/space-search.component';
import { ContactComponent } from './contact/contact.component';
import { DocumentComponent } from './document/document.component';
import { ColorTranslatorComponent } from './color-translator/color-translator.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Easy Inside' }
  },
  {
    path: 'admin/dashboard',
    component: AdminDashboardComponent,
    data: { title: 'Admin Dashboard - Easy Inside' }
  },
  {
    path: 'admin/userlist',
    component: UserlistComponent,
    data: { title: 'User List - Easy Inside' }
  },
  {
    path: 'admin/userdetails/:id',
    component: UserviewComponent,
    data: { title: 'User Details - Easy Inside' }
  },
  {
    path: 'maker/dashboard',
    component: MakerDashboardComponent,
    data: { title: 'Dashboard - Easy Inside' }
  },
  {
    path: 'maker/account',
    component: AccountComponent,
    data: { title: 'User Profile - Easy Inside' }
  },
  {
    path: 'maker/spaces',
    component: SpacesComponent,
    data: { title: 'Spaces - Easy Inside' }
  },
  {
    path: 'maker/spacedetails/:id',
    component: SpaceEditComponent,
    data: { title: 'Space Details - Easy Inside' }
  },
  {
    path: 'maker/map-detail/:id',
    component: MapDetailComponent,
    data: { title: 'Map Details - Easy Inside' }
  },
  {
    path: 'maker/map-edit/:id',
    component: MapEditComponent,
    data: { title: 'Map Editor - Easy Inside' }
  },
  {
    path: 'maker/map-optimizer/:id',
    component: MapOptimizerComponent,
    data: { title: 'Map Optimizer - Easy Inside' }
  },
  {
    path: 'maker/desk-edit/:id',
    component: DeskEditComponent,
    data: { title: 'Desk Editor - Easy Inside' }
  },
  {
    path: 'maker/info-edit/:id',
    component: InfoEditComponent,
    data: { title: 'Information Editor - Easy Inside' }
  },
  {
    path: 'maker/textures',
    component: TexturesComponent,
    data: { title: 'Textures - Easy Inside' }
  },
  {
    path: 'maker/geometries',
    component: GeometriesComponent,
    data: { title: 'Geometries - Easy Inside' }
  },
  {
    path: 'maker/dings',
    component: DingsComponent,
    data: { title: 'Things - Easy Inside' }
  },
  {
    path: 'maker/robots',
    component: RobotsComponent,
    data: { title: 'Robots - Easy Inside' }
  },
  {
    path: 'map/login/:id',
    component: MapLoginComponent,
    data: { title: 'Give Me Password - Easy Inside' }
  },
  {
    path: 'map/:id',
    component: MapViewComponent,
    data: { title: 'Map Explore - Easy Inside' }
  },
  {
    path: 'spaces',
    component: SpaceSearchComponent,
    data: { title: 'Spaces - Easy Inside' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact - Easy Inside' }
  },
  {
    path: 'document',
    component: DocumentComponent,
    data: { title: 'Document - Easy Inside' }
  },
  {
    path: 'app/color-translator',
    component: ColorTranslatorComponent,
    data: { title: 'Color Translator - Easy Inside' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    NavPrivateComponent,
    UserlistComponent,
    ConvertTimezonePipe,
    ArithmeticRGBtoHEXPipe,
    UserviewComponent,
    SpacesComponent,
    SpaceEditComponent,
    MapDetailComponent,
    MapEditComponent,
    MakerDashboardComponent,
    AdminDashboardComponent,
    TexturesComponent,
    GeometriesComponent,
    DingsComponent,
    DeskEditComponent,
    MapOptimizerComponent,
    InfoEditComponent,
    MapLoginComponent,
    MapViewComponent,
    RobotsComponent,
    SpaceSearchComponent,
    ContactComponent,
    DocumentComponent,
    ColorTranslatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    MomentModule,
    FileUploadModule
  ],
  providers: [
    AccountService,
    Title,
    NavigationService,
    SpaceService,
    TexturesService,
    GeometriesService,
    DingsService,
    ApiService,
    InfosService,
    RobotService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
