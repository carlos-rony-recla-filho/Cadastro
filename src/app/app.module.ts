import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import {  provideHttpClient } from '@angular/common/http';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { TbUsuariosComponent } from './components/tb-usuarios/tb-usuarios.component';
import { IdadePipe } from './components/tb-usuarios/idade.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    FormCadastroComponent,
    ListaUsuariosComponent,
    TbUsuariosComponent,
    IdadePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskDirective,
    ReactiveFormsModule,
  ],
  providers: [
    provideNgxMask(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
