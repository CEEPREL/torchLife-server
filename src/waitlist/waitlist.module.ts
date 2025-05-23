import { Module } from '@nestjs/common';
import { WaitlistResolver } from './waitlist.resolver';
import { WaitlistService } from './waitlist.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerModule } from 'src/mailer/mailer.modules';

@Module({
  imports: [MailerModule],
  providers: [WaitlistService, WaitlistResolver, PrismaService],
})
export class WaitlistModule {}