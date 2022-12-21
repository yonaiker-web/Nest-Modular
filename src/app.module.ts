import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { firstValueFrom } from 'rxjs';
import { HttpModule, HttpService } from '@nestjs/axios';

//creamos una apikey par probarl el usevalue
const API_KEY = '12345632';
//creamos un apikey de produccion
const API_KEY_PROD = 'PROD12345632';

@Module({
  //imports nos sirve para importan otros modulos y separar los controladores y servicios
  imports: [ProductsModule, UsersModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'API_KEY',
      //mandamos el valor dependiente de que ambiente de produccion estmos usando
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      //agregamos un provider
      provide: 'TASKS',
      //permiten manda valores desde un peticion asincrona
      useFactory: async (http: HttpService) => {
        const response = http.get('https://jsonplaceholder.typicode.com/todos');
        const tasks = await firstValueFrom(response);
        return tasks.data;
      },
      //injectamos HttpServices
      inject: [HttpService],
    },
  ],
})
export class AppModule {}
