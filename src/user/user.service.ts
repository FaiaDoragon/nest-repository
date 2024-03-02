import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/Usuarios.entities'; // Importa tu entidad
import { UserDto } from './dto/user.dto'; // Importa tu DTO
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async create(userDto: UserDto): Promise<Usuario> {
    const newUser = Object.assign(new Usuario(), userDto);
    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<Usuario[]> {
    const usuarios: Usuario[] = await this.userRepository.find()
    if (usuarios.length !== 0) {
      return usuarios; 
    } else {
      throw new Error (`No hay usuarios Registrados`)
    }
      
  }

  async findOne(id: number): Promise<Usuario> {
    return await this.userRepository.findOne({where : {id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<Usuario> {
    const userToUpdate = await this.userRepository.findOne({where : {id}});
    if (!userToUpdate) {
      throw new Error(`User with id ${id} not found`);
    }
    const updatedUser = Object.assign(userToUpdate, updateUserDto);
    return await this.userRepository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
