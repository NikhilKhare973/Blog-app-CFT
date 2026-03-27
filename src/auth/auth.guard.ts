// This file checks if the user sent a valid token in their request.
// If they did, it allows the request to proceed. If not, it throws an error.

import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // Grab the token from the header
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) throw new UnauthorizedException('No token provided');

    try {
      // Verify the token using the same secret we set earlier
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'MY_SECRET_KEY',
      });
      request['user'] = payload; // Attach user info to the request so we can use it later
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
    return true;
  }
}
