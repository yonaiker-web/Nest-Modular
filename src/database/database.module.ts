import { Global, Module } from '@nestjs/common';

//creamos una apikey par probarl el usevalue
const API_KEY = '12345632';
//creamos un apikey de produccion
const API_KEY_PROD = 'PROD12345632';

//le indica que todo lo que escriba seran variables globales
@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      //mandamos el valor dependiente de que ambiente de produccion estmos usando
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  //le indicamos que es exportado para ser usado en otros modulos o servicios
  exports: ['API_KEY'],
})
export class DatabaseModule {}
