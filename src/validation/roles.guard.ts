import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import jwt_decode from 'jwt-decode';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }
    // const contractTypesRepository = getRepository(User)
    const request = context.switchToHttp().getRequest();
    const token: any = jwt_decode(request.headers.authorization);

    if (roles.includes(token.role)) {
      return true;
    }

    throw new HttpException('Sem permissão na role', 403);
  }
}
