import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './config/logger/logger.service';
import { Logger } from '@nestjs/common';
import { LoggerModule } from './config/logger/logger.module';

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {

  });

  const port = process.env.PORT || 3000

  // app.useLogger(app.get(LoggerService))

  await app.listen(port);

  if (module.hot){
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }

  Logger.log(`Server is ready at ${port}`)
}

bootstrap();
