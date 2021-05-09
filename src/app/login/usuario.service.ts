import { Subject } from "rxjs/internal/Subject";


export class UsuarioService {
  private autenticado: boolean = false;
  private token: string;
  private tokenTimer: NodeJS.Timer;
  private idUsuario: string;
  private authStatusSubject = new Subject<boolean>();
}
