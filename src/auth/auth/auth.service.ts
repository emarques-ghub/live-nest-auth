import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

//senhas geradas com node generate-pass.js 123456
const users = [
  {
    id: 1,
    username: 'user1@user.com',
    password: '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
    role: 'admin',
  },
  {
    id: 2,
    username: 'user2@user.com',
    password: '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
    role: 'user',
  },
  {
    id: 3,
    username: 'user3@user.com',
    password: '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
    role: 'user',
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  login(username: string, password: string) {
    //console.log(username, password);
    const user = this.validateCredentials(username, password);
    const payload = {
      sub: user.id, //para quem o token foi gerado
      username: user.username,
      role: user.role,
    };
    return this.jwtService.sign(payload); //aqui é feita a chamada para criação do token
  }

  //neste exemplo é feita a consulta do array de users acima, mas aqui poderia ser a consulta ao DB
  validateCredentials(username: string, password: string) {
    const user = users.find(
      (u) =>
        u.username === username && bcrypt.compareSync(password, u.password),
    );

    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}
