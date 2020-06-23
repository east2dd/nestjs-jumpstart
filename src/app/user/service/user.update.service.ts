import { User } from '../user.entity';
import { UserUpdateDto } from '../dto/user.update.dto';
import { UserBaseService } from './user.base.service';

export default class UserUpdateService extends UserBaseService
{
  async call(id: number, params: UserUpdateDto): Promise<User> {
    const user = await this.repository.findOne({ id: id });
    Object.assign(user, params);

    return this.repository.save(user);
  }
}
