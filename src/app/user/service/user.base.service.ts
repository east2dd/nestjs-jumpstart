import { Repository } from "typeorm";
import { BaseService } from "../../../common/base-service";
import { User } from '../user.entity';

export abstract class UserBaseService extends BaseService{
  constructor(protected repository: Repository<User>) {
    super();
  }
}
