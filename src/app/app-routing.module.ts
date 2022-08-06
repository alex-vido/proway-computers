import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  { path: 'produtos', component: ProdutosComponent},
  { path: "", redirectTo: "produtos", pathMatch: "full"},
  { path: 'carrinho', component: CarrinhoComponent},
  { path: 'contato', component: ContatoComponent},
  { path: "**", component: NaoEncontradoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
