import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty({
    name: 'email',
    description: 'Email Address of User',
  })
  @IsOptional()
  @IsString()
  public readonly email: string

  @ApiProperty({
    name: 'firstName',
    description: 'First Name of User',
  })
  @IsOptional()
  @IsString()
  public readonly firstName: string

  @ApiProperty({
    name: 'lastName',
    description: 'Last Name of User',
  })
  @IsOptional()
  @IsString()
  public readonly lastName: string
}
