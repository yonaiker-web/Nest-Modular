import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //injectamos el apiKey declarado en el app.module
  //injectamos tasks que es una peticion asincrona
  constructor(
    @Inject('API_KEY') private apiKey: string,
    @Inject('TASKS') private tasks: any[],
  ) {}

  getHello(): string {
    console.log('Tareas: ', this.tasks);

    return `HEllo api: ${this.apiKey}`;
  }
}
