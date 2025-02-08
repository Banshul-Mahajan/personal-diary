import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // This defines the base URL for the controller
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup') // Ensure this path is correct
  async signup(@Body() body: { name: string; email: string; password: string }) {
    return this.authService.signup(body.name, body.email, body.password);
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }
}
