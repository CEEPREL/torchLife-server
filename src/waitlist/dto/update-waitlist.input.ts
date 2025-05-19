import { CreateWaitlistInput } from './create-waitlist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWaitlistInput extends PartialType(CreateWaitlistInput) {
  @Field(() => Int)
  id: number;
}
