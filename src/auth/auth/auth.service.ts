import { Injectable } from '@nestjs/common';

//senhas geradas com node generate-pass.js 123456
const users: {}[] = [
    {
        id: 1,
        username: 'user1@user.com',
        password:  '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
        role: 'admin',
    },
    {
        id: 2,
        username: 'user2@user.com',
        password:  '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
        role: 'user',
    },
    {
        id: 3,
        username: 'user3@user.com',
        password:  '$2b$10$QLpOVBPRL3713dM3PuQsfe2cdMU7gIbXvdtbSK7ott7AWFIypkLHm',
        role: 'user',
    },
];

@Injectable()
export class AuthService {
    login(username:string, password:string){
        console.log(username, password);
    }
}
