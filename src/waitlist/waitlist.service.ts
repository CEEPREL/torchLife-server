import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWaitlistInput } from './dto/create-waitlist.input';
import { Waitlist as PrismaWaitlist } from '../../generated/prisma';

@Injectable()
export class WaitlistService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateWaitlistInput): Promise<PrismaWaitlist> {
    return this.prisma.waitlist.create({
      data: input,
    });
  }

  async findAll(): Promise<PrismaWaitlist[]> {
    return this.prisma.waitlist.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
