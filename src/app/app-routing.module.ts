import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importar los componentes a los que se quiere navegar.
import { IndexComponent } from "../app/components/index/index.component";

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
