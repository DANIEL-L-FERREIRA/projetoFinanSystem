import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'fornecedor',
    loadChildren: () => import('./fornecedor/fornecedor.module').then( m => m.FornecedorPageModule)
  },
  {
    path: 'tiporeceita',
    loadChildren: () => import('./tiporeceita/tiporeceita.module').then( m => m.TiporeceitaPageModule)
  },
  {
    path: 'tipodespesa',
    loadChildren: () => import('./tipodespesa/tipodespesa.module').then( m => m.TipodespesaPageModule)
  },
  {
    path: 'receita',
    loadChildren: () => import('./receita/receita.module').then( m => m.ReceitaPageModule)
  },
  {
    path: 'despesa',
    loadChildren: () => import('./despesa/despesa.module').then( m => m.DespesaPageModule)
  },
  {
    path: 'baixareceber',
    loadChildren: () => import('./baixareceber/baixareceber.module').then( m => m.BaixareceberPageModule)
  },
 
  {
    path: 'baixapagar',
    loadChildren: () => import('./baixapagar/baixapagar.module').then( m => m.BaixapagarPageModule)
  },
  {
    path: 'contaspagar',
    loadChildren: () => import('./contaspagar/contaspagar.module').then( m => m.ContaspagarPageModule)
  },
  {
    path: 'contasreceber',
    loadChildren: () => import('./contasreceber/contasreceber.module').then( m => m.ContasreceberPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
