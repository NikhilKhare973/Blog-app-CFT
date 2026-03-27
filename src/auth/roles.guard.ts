// If a route has a Role tag, this Guard checks if the logged-in user actually has that role.

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Look for the @Roles() tag on the route
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) return true; // If there is no tag, anyone can access it

    // Get the user we attached in the AuthGuard
    const { user } = context.switchToHttp().getRequest();

    // Check if their role matches the required roles
    return requiredRoles.includes(user.role);
  }
}
