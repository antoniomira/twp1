import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';

// Importar los componentes a los que se quiere navegar.
import { IndexComponent } from '../app/components/index/index.component';
import { CurriculumComponent} from '../app/components/curriculum/curriculum.component';

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  //{ path: 'heroes', component: HeroesComponent }
  { path: '', component: IndexComponent },
  { path: 'curriculum', component: CurriculumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
