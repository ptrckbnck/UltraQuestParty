import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroCardComponent } from './components/hero/hero-card/hero-card.component';
import { ModifiableAttributeComponent } from './components/hero/modifiable-attribute/modifiable-attribute.component';
import { ModifiableAttributeHorseComponent } from './components/hero/modifiable-attribute-horse/modifiable-attribute-horse.component';
import { PartyComponent } from './components/hero/party/party.component';
import { AbilityNewComponent } from './components/hero/ability-new/ability-new.component';
import { RaceComponent } from './components/race/race.component';

const appRoutes: Routes = [
  {path: 'party', component: PartyComponent},
  {path: 'party/:name', component: PartyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hero', component: HeroCardComponent},
  {path: 'test', component: RaceComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    HeroCardComponent,
    ModifiableAttributeComponent,
    ModifiableAttributeHorseComponent,
    AbilityNewComponent,
    PartyComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
