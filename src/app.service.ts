import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  //injectamos el apiKey declarado en el app.module
  //injectamos tasks que es una peticion asincrona
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    //importamos COnfigService el servicio de configuracion de entornos de nest
    private config: ConfigService,
  ) {}

  //creamos el endpoint para obtener las variables de entorno
  getENvs(): string {
    const apiKey = this.config.get<string>('API_KEY');
    const name = this.config.get('DATABASE_NAME');
    return `Envs: ${apiKey} ${name}`;
  }

  getHello(): string {
    console.log('Tareas: ', this.tasks);

    return `HEllo api: ${this.apiKey}`;
  }
}
