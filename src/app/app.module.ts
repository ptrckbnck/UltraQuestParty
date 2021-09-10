import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSelectModule} from '@angular/material/select'; 
import { DragDropModule } from '@angular/cdk/drag-drop';

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
import { ModifiableAttributeWTooltipComponent } from './components/hero/modifiable-attribute-w-tooltip/modifiable-attribute-w-tooltip.component';
import { TestComponent } from './components/test/test.component';
import { AttributeWTooltipComponent } from './components/hero/attribute-w-tooltip/attribute-w-tooltip.component';
import { MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartyViewComponent } from './components/hero/party-view/party-view.component';
import { HeroCardViewComponent } from './components/hero/hero-card-view/hero-card-view.component';
import { AttributeComponent } from './components/hero/attribute/attribute.component';
import { AttributeHorseViewComponent } from './components/hero/attribute-horse-view/attribute-horse-view.component';
import { AbilityViewComponent } from './components/hero/ability-view/ability-view.component';

const appRoutes: Routes = [
  {path: 'party', component: AboutComponent},
  {path: 'party/:name', component: PartyComponent},
  {path: 'party/:name/view', component: PartyViewComponent},
  {path: 'about', component: AboutComponent},
  {path: 'hero', component: HeroCardComponent},
  {path: 'test', component: TestComponent},
  
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
    ModifiableAttributeWTooltipComponent,
    TestComponent,
    AttributeWTooltipComponent,
    PartyViewComponent,
    HeroCardViewComponent,
    AttributeComponent,
    AttributeHorseViewComponent,
    AbilityViewComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatSelectModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
