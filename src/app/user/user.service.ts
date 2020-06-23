import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { UserUpdateDto } from './dto/user.update.dto';
import UserUpdateService from './service/user.update.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  find(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findByEmail(email: string): Promise<User>{
    return this.userRepository.findOne({ email: email });
  }

  async update(id: number, params: UserUpdateDto) : Promise<User>{
    return await new UserUpdateService(this.userRepository).call(id, params);
  }
}
