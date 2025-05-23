import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Waitlist {
  @Field((type)=>Int)
  id: number;

  @Field()
  full_name: string;

  @Field()
  email: string;

  @Field()
  phone_number: string;

  @Field({nullable:true})
  more?: string;

  @Field(() => Date)
  created_at: Date;
}
