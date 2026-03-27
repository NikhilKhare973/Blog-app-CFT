import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) {}

  // 1. Create a new blog
  async create(userId: number, title: string, content: string) {
    return this.prisma.blog.create({
      data: { title, content, authorId: userId },
    });
  }

  // 2. Get all blogs (and show the author's email)
  async findAll() {
    return this.prisma.blog.findMany({
      include: { author: { select: { email: true } } },
    });
  }

  // 3. Get a single blog by its ID
  async findOne(id: number) {
    const blog = await this.prisma.blog.findUnique({ where: { id } });
    if (!blog) throw new NotFoundException('Blog not found');
    return blog;
  }

  // 4. Delete a blog
  async remove(id: number) {
    return this.prisma.blog.delete({ where: { id } });
  }

  // 5. Update a blog
  async update(id: number, title: string, content: string) {
    return this.prisma.blog.update({
      where: { id },
      data: { title, content },
    });
  }
}
