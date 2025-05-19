import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Waitlist {
  @Field((type)=>Int)
  id: number;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field({nullable:true})
  more?: string;

  @Field(() => Date)
  createdAt: Date;
}
