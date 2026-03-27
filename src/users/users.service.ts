import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async create(data: any) {
    return this.prisma.user.create({ data });
  }

  // 3. Get all users (but hide their passwords!)
  async findAll() {
    return this.prisma.user.findMany({
      select: { id: true, email: true, role: true },
    });
  }

  // 4. Update a user's role
  async updateRole(id: number, role: string) {
    return this.prisma.user.update({
      where: { id },
      data: { role },
      select: { id: true, email: true, role: true },
    });
  }
}
