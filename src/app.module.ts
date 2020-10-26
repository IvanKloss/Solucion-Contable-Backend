import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngresosModule } from './ingresos/ingresos.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [IngresosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
