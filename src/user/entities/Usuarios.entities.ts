import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('email', ['email'], { unique: true })
@Entity('usuarios', { schema: 'USERSDB' })
export class Usuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 50 })
  name: string;

  @Column('varchar', { name: 'last_name', length: 50 })
  lastName: string;

  @Column('varchar', { name: 'password', length: 100 })
  password: string;

  @Column('varchar', { name: 'email', unique: true, length: 100 })
  email: string;

  @Column('varchar', { name: 'phone_number', nullable: true, length: 15 })
  phoneNumber: string | null;

  @Column('varchar', { name: 'address', nullable: true, length: 100 })
  address: string | null;

  @Column('varchar', { name: 'city', nullable: true, length: 50 })
  city: string | null;

  @Column('date', { name: 'created_at', nullable: true })
  createdAt: Date = new Date();

  @Column('date', { name: 'updated_at', nullable: true })
  updatedAt: Date = new Date();
}
