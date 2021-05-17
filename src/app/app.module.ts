import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AgendaInserirComponent } from './agenda/agenda-inserir/agenda-inserir.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AuthService } from './login/auth.service';
import { LoginComponent } from './login/login.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };
@NgModule({
declarations: [AppComponent, AgendaInserirComponent, CadastroComponent, LoginComponent],
imports: [BrowserModule, AppRoutingModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, SocketIoModule.forRoot(config) ],
providers: [AuthService],
bootstrap: [AppComponent],
})
export class AppModule {}
