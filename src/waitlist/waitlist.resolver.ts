import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { WaitlistService } from './waitlist.service';
import { Waitlist } from './entities/waitlist.entity';
import { CreateWaitlistInput } from './dto/create-waitlist.input';
import { Waitlist as PrismaWaitlist } from 'generated/prisma'; // Adjust path

@Resolver(() => Waitlist)
export class WaitlistResolver {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Mutation(() => Waitlist)
  async createWaitlist(
    @Args('input') input: CreateWaitlistInput,
  ): Promise<Waitlist> {
    const entry = await this.waitlistService.create(input);
    return this.toGraphQL(entry);
  }

  @Query(() => [Waitlist])
  async waitlist(): Promise<Waitlist[]> {
    const entries = await this.waitlistService.findAll();
    return entries.map(this.toGraphQL);
  }

  // Mapping function: Prisma → GraphQL
  private toGraphQL(entry: PrismaWaitlist): Waitlist {
    return {
      id: entry.id,
      fullName: entry.fullName,
      email: entry.email,
      phoneNumber: entry.phoneNumber,
      more: entry.more ?? undefined,
      createdAt: entry.createdAt,
    };
  }
}
