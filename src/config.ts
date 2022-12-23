//creamos un archivo para la configuracion

import { registerAs } from '@nestjs/config';

//registerAs servira para crear el tipado de datos
export default registerAs('config', () => {
  //retornamos el objeto de la estructura de datos
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
  };
});
