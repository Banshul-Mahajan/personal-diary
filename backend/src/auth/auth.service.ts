import { Injectable } from "@nestjs/common";
import { PrismaService} from '../prisma/prisma.service';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private jwtService: JwtService) {}

    async signup(name: string, email: string, password: string) {
        console.log("Received data:", { name, email, password });
      
        const hashedPassword = await bcrypt.hash(password, 10);
        return this.prisma.user.create({
          data: {
            name,        // Name should be assigned to the name field
            email,       // Email should be assigned to the email field
            password: hashedPassword,  // Store the hashed password
          },
        });
      }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: {email }});
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }
        return {token: this.jwtService.sign({userId: user.id})};
    }
}