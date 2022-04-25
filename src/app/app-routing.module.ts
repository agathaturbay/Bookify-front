import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'home', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) }]),
  Shell.childRoutes([
    {
      path: 'discover',
      loadChildren: () => import('./discover/discover.module').then((m) => m.DiscoverModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'suggestions',
      loadChildren: () => import('./suggestions/suggestions.module').then((m) => m.SuggestionsModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'book',
      loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'update-book/:id',
      loadChildren: () => import('./update-book/update-book.module').then((m) => m.UpdateBookModule),
    },
  ]),
  Shell.childRoutes([
    {
      path: 'profile-update',
      loadChildren: () => import('./profile-update/profile-update.module').then((m) => m.ProfileUpdateModule),
    },
  ]),
  { path: 'register', loadChildren: () => import('./register/register.module').then((m) => m.RegisterModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
