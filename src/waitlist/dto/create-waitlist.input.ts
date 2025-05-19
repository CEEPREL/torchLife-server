
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateWaitlistInput {
  @Field()
  @IsNotEmpty()
  fullName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  phoneNumber: string;

  @Field({ nullable: true })
  @IsOptional()
  more?: string;
}
