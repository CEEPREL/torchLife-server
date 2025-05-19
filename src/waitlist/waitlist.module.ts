import { Module } from '@nestjs/common';
import { WaitlistResolver } from './waitlist.resolver';
import { WaitlistService } from './waitlist.service';
import { PrismaService } from 'src/prisma/prisma.service'; // Use PrismaService

@Module({
  providers: [
    WaitlistService,
    WaitlistResolver,
    PrismaService, 
  ],
})
export class WaitlistModule {}
