import { Controller, Get, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

// Placing the Guards up here protects EVERY route in this file
@UseGuards(AuthGuard, RolesGuard)
@Roles('ADMIN')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 🔴 PROTECTED - Only Admins can see all users
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // 🔴 PROTECTED - Only Admins can change roles
  @Patch(':id/role')
  updateRole(@Param('id') id: string, @Body() body: { role: string }) {
    return this.usersService.updateRole(Number(id), body.role);
  }
}
