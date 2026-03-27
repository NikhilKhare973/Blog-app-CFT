// We need a simple way to "tag" our routes to say, "Hey, only Admins are allowed here." This file creates that tag.

import { SetMetadata } from '@nestjs/common';

// This lets us tag a route like this: @Roles('ADMIN', 'AUTHOR')
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
