import { Controller, UseGuards, Request, Post, Get } from '@nestjs/common';
import { Request as ExpressRequest, Router } from 'express';
import { AuthService } from './shared/auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('list/routes')
  @Get()
  root(@Request() req: ExpressRequest) {
    const router = req.app._router as Router;
    return router.stack
      .map((layer) => {
        if (layer.route) {
          const path = layer.route?.path;
          const method = layer.route?.stack[0].method;

          if (
            method === 'get' &&
            !path.includes('/:') &&
            path !== '/list/routes'
          ) {
            return `${path.split('/')[1]}`;
          }
        }
      })
      .filter((item) => item !== undefined);
  }
}
