// import { EntityRepository, Repository } from 'typeorm'
// import { User } from './user.entity'
// import { AuthCredentialsDto } from './auth.credentials.dto'

// @EntityRepository(User)
// export class userRepository extends Repository<User> {
//     async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
//         const { username, password } = authCredentialsDto;
//         const this.create({ username, password });
//         await this.save(user);
//     }
// }