import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { firstValueFrom } from 'rxjs';
import { HttpModule, HttpService } from '@nestjs/axios';
import { DatabaseModule } from './database/database.module';

@Module({
  //imports nos sirve para importan otros modulos y separar los controladores y servicios
  imports: [ProductsModule, UsersModule, HttpModule, DatabaseModule],
  controllers: [AppController],
  providers: [
    AppService,

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
