import { Time } from '@angular/common';
import { Component } from '@angular/core';

@Component({
selector: 'app-agenda-inserir',
templateUrl: './agenda-inserir.component.html',
styleUrls: ['./inserir.component.css'],
})

export class AgendaInserirComponent {
    data: Date ;
    hora: Time;
    onAdicionarAgenda() {
        console.log('inserindo data...');
        }
}
