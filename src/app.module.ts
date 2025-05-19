import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { WaitlistModule } from './waitlist/waitlist.module';
import { MailerService } from './mailer/mailer.service';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'), 
    sortSchema: true,
    playground: true,
    introspection: true,
  }),WaitlistModule,],
  controllers: [],
  providers: [MailerService],
})
export class AppModule {}
