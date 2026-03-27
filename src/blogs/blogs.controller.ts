import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Request,
  UnauthorizedException,
  Patch,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  // 🟢 PUBLIC - Anyone can see all blogs
  @Get()
  findAll() {
    return this.blogsService.findAll();
  }

  // 🟢 PUBLIC - Anyone can see a specific blog
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blogsService.findOne(Number(id));
  }

  // 🔴 PROTECTED - Only Authors and Admins can create
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('AUTHOR', 'ADMIN')
  @Post()
  create(@Request() req, @Body() body: { title: string; content: string }) {
    // req.user.sub is the ID of the logged-in user!
    return this.blogsService.create(req.user.sub, body.title, body.content);
  }

  // 🔴 PROTECTED - Only Admins can delete
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blogsService.remove(Number(id));
  }

  // 🟠 PROTECTED - Only Owner or Admin can update (Patch - update)
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('AUTHOR', 'ADMIN')
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Request() req,
    @Body() body: { title: string; content: string },
  ) {
    const blogId = Number(id);

    // First, find the blog to check who the author is
    const blog = await this.blogsService.findOne(blogId);

    // Rule: If you are NOT the author AND you are NOT an Admin, kick them out!
    if (blog.authorId !== req.user.sub && req.user.role !== 'ADMIN') {
      throw new UnauthorizedException('You can only update your own blogs!');
    }

    // If they pass the check, update the blog
    return this.blogsService.update(blogId, body.title, body.content);
  }
}
