import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
    { path: 'account', loadChildren: './outside/layout.module#LayoutModule'},
    { path: '', loadChildren: './inside/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: '**', loadChildren: './outside/views/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
