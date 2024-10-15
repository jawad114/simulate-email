
import { Injectable, NestMiddleware } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  use(req: any, res: any, next: () => void) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token && this.userService.isTokenBlacklisted(token)) {
      return res.status(401).json({ message: 'Token is invalid or expired' });
    }

    next();
  }
}
