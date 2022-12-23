import { Inject, Injectable } from '@nestjs/common';
import { ConfigService, ConfigType } from '@nestjs/config';
import config from './config';

@Injectable()
export class AppService {
  //injectamos el apiKey declarado en el app.module
  //injectamos tasks que es una peticion asincrona
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
    //importamos COnfigService el servicio de configuracion de entornos de nest
    //private config: ConfigService,
    //injectamos
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  //creamos el endpoint para obtener las variables de entorno
  getENvs(): string {
    //ahora jalamos los nombres o varaibles desde un objeto tipado
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    const port = this.configService.database.port;
    return `Envs: ${apiKey} ${name} ${port}`;
  }

  getHello(): string {
    console.log('Tareas: ', this.tasks);

    return `HEllo api: ${this.apiKey}`;
  }
}
