import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryPageComponent } from './entry-page/entry-page.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: EntryPageComponent },
  { path: 'welcome', component: NavbarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
