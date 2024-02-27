import { Routes } from '@angular/router';
import { SolidComponent } from './solid/solid.component';
import { GenericComponent } from './generic/generic.component';
import { DecoratorsComponent } from './decorators/decorators.component';

export const routes: Routes = [
  { path: 'solid', component: SolidComponent },
  { path: 'generic', component: GenericComponent },
  { path: 'decorator', component: DecoratorsComponent },
];
