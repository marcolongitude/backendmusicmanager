import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { pipe } from 'fp-ts/function';
import {OutsideRegister, register} from './users';
import { User } from '../types/user';


const registerOk: OutsideRegister<string> = async (data) => {
    return `Usuário ${data.name} cadastrado com sucesso!`
}

const data: User = {
    id: 'fsalkdflksdf',
    name: 'marco',
    email: 'marco@email.com',
    avatar: 'alsdkflskdfk'
}

it('Deveria cadastrar um usuário com sucesso', async () => {
    return pipe(
        data,
        register(registerOk),
        TE.map(result => expect(result).toBe(`Usuário ${data.name} cadastrado com sucesso!`))
    )()
})
