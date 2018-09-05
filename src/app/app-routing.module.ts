import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RepositoriesPageComponent} from './repositories-page/repositories-page.component';

const routes: Routes = [
  { path: 'repos',  component: RepositoriesPageComponent },
  { path: '**', redirectTo: '/repos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
