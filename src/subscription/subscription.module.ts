import { Module } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionController } from './subscription.controller';
import { CheckUserAccess } from './access-check/accesscheck';

@Module({
  providers: [SubscriptionService, CheckUserAccess],
  controllers: [SubscriptionController]
})
export class SubscriptionModule {}
