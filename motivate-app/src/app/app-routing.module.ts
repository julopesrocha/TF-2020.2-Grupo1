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
    path: 'cadastro-receita',
    loadChildren: () => import('./pages/cadastro-receita/cadastro-receita.module').then( m => m.CadastroReceitaPageModule)
  },
  {
    path: 'challenge-page',
    loadChildren: () => import('./pages/challenge-page/challenge-page.module').then( m => m.ChallengePagePageModule)
  },
  {
    path: 'challenge-page',
    loadChildren: () => import('./pages/challenge-page/challenge-page.module').then( m => m.ChallengePagePageModule)
   },
   {
    path: 'cadastro-receita',
    loadChildren: () => import('./pages/cadastro-receita/cadastro-receita.module').then( m => m.CadastroReceitaPageModule)
    }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
