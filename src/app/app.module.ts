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


@NgModule({
declarations: [AppComponent, AgendaInserirComponent, CadastroComponent],
imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule],
providers: [],
bootstrap: [AppComponent],
})
export class AppModule {}
