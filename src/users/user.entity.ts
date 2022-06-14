import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from '../addresses/address.entity';
import { Gender } from '../common/constants';
import { Role } from '../roles/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({ type: 'enum', enum: Gender })
  gender: Gender;

  @JoinColumn({ name: 'address_id' })
  @OneToOne((type) => Address)
  addressId: string;

  @JoinColumn({ name: 'role_id' })
  @ManyToOne((type) => Role)
  roleId: string;
}
