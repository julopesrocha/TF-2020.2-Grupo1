import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home-deslog',
    loadChildren: () => import('./pages/home-deslog/home-deslog.module').then( m => m.HomeDeslogPageModule)
   },
  {
    path: 'cadastro-usuario',
    loadChildren: () => import('./pages/cadastro-usuario/cadastro-usuario.module').then( m => m.CadastroUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'challenge-page',
    loadChildren: () => import('./pages/challenge-page/challenge-page.module').then( m => m.ChallengePagePageModule)
  },
   {
    path: 'cadastro-desafio',
    loadChildren: () => import('./pages/cadastro-desafio/cadastro-desafio.module').then( m => m.CadastroDesafioPageModule)
  },

   {
    path: 'recipe',
    loadChildren: () => import('./pages/recipe/recipe.module').then( m => m.RecipePageModule)
  },  {
    path: 'profile-other/:id',
    loadChildren: () => import('./pages/profile-other/profile-other.module').then( m => m.ProfileOtherPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
