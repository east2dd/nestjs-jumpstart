import { UserBaseService } from './user.base.service';
import { User } from '../user.entity';

export default class UserFindService extends UserBaseService
{
  call(): Promise<User[]> {
    return this.repository.find();
  }
}
