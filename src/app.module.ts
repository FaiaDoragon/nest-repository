import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './user/entities/Usuarios.entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'APIUSERSDB',
      synchronize: false,
      entities: [Usuario], // Ajusta esta ruta según la ubicación de tus entidades
    }),
    UserModule, // Agrega tu UserModule aquí
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
