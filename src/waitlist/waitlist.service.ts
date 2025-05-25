import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateWaitlistInput } from './dto/create-waitlist.input';
import { Waitlist as PrismaWaitlist } from '../../generated/prisma';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class WaitlistService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailerService: MailerService,
  ) {}

  async create(input: CreateWaitlistInput): Promise<PrismaWaitlist> {
    // 1. Create new waitlist entry
    const emailExists = await this.prisma.waitlist.findUnique({
      where: { email: input.email },
    });
    if (emailExists) {
      throw new Error('Email already exists');
    }
    const newEntry = await this.prisma.waitlist.create({
      data: input,
    });

    // 2. Render the email template (with user info)
    const html = await this.mailerService.renderTemplate('otp-temp.html', {
      full_name: input.full_name,
    });

    // 3. Send the HTML email
    await this.mailerService.sendHtmlEmail(
      input.email,
      'TorchLife Africa WaitList.',
      html,
    );

    return newEntry;
  }

  async findAll(): Promise<PrismaWaitlist[]> {
    return this.prisma.waitlist.findMany({
      orderBy: { created_at: 'desc' },
    });
  }
}
