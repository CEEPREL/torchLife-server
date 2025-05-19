
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Waitlist {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  fullName: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  phoneNumber: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  more?: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;
}
