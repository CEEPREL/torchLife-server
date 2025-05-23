import { Injectable } from '@nestjs/common';
import Handlebars from 'handlebars';
import * as nodemailer from 'nodemailer'; // Fix for the import statement
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class MailerService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Check if email user and password are available from the environment
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASSWORD;

    if (!emailUser || !emailPass) {
      throw new Error('Email credentials are missing from environment variables.');
    }

    // Initialize the transporter
    this.transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: emailUser, 
        pass: emailPass, 
      },
    });
  }

  async renderTemplate(
    templateName: string,
    data: Record<string, any>,
  ): Promise<string> {
    const templatePath = path.join(__dirname, '../../emailTemp', templateName);
    const templateContent = fs.readFileSync(templatePath, 'utf-8');
    const compiled = Handlebars.compile(templateContent);
    return compiled(data);
  }

  async sendHtmlEmail(to: string, subject: string, html: string): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to,
      subject,
      html,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}
