import { Injectable } from '@angular/core';
import { Agenda } from './agenda.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { time } from 'node:console';

@Injectable({ providedIn: 'root'})
export class AgendaService {
  private agenda: Agenda[] = [];
  private listaAgendaAtualizada = new Subject<Agenda[]>();

  constructor(private httpClient: HttpClient, private router: Router){

  }

  getAgenda(): void {
      this.httpClient.get <{mensagem: string, agenda: any}>('http://localhost:4200/api/agenda')
        .pipe(map((dados) => {
          return dados.agenda.map((agenda:any) => {
            return {
              data: agenda.data,
              hora: agenda.hora
            }
          })
        }))
        .subscribe(
          (agenda) => {
            this.agenda = agenda;
            this.listaAgendaAtualizada.next([...this.agenda]);
          }
        )
  }

  getListaDeClientesAtualizadaObservable(){
    return this.listaAgendaAtualizada.asObservable();
  }

  adicionarAgenda(data:Date, hora:String){
    const agenda: Agenda = {
      data: data,
      hora: hora
    };
    this.httpClient.post<{mensagem: string, id: string}>('http://localhost:3000/api/agenda',
      agenda).subscribe(
        (dados) => {
          console.log(dados.mensagem);
          this.agenda.push(agenda);
          this.listaAgendaAtualizada.next([...this.agenda]);
          this.router.navigate(['/']);
        }
      )
  }




}

