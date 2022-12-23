import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { AppService } from './app.service';
import config from './config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    //eyectamos
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('env')
  getEnvs(): string {
    return this.appService.getENvs();
  }

  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }
}
