import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // This makes Prisma available everywhere in your app!
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export it so other modules can use it
})
export class PrismaModule {}
