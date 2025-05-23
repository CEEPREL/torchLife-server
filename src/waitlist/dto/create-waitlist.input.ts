
import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateWaitlistInput {
  @Field()
  @IsNotEmpty()
  full_name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  phone_number: string;

  @Field({ nullable: true })
  @IsOptional()
  more?: string;
}
