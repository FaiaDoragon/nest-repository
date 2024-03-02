import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/Usuarios.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
