// src/mailer/mailer.service.ts
import { Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Set up the transporter with your email service (Gmail, SendGrid, etc.)
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Use the appropriate email service (Gmail, SendGrid, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to, // List of recipients
      subject, // Subject line
      text, // Plain text body
    };

    try {
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
}
