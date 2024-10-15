import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';
import { JwtStrategy } from './strategy/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { JwtMiddleware } from 'src/middleware/jwt.middleware';
@Module({
  imports:[  
    TypeOrmModule.forFeature([User]),
     JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' }, 
  }),],
  controllers: [UserController],
  providers: [UserService,JwtStrategy],
  exports:[JwtStrategy, JwtModule]

})
export class UserModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(JwtMiddleware).forRoutes('*'); // Apply middleware to all routes or specific ones
  }
}
