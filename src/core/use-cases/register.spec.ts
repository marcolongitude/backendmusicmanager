import {Register} from './register'

const response = Register();

describe('Test user functions Group', () => {
    it('test initial', () => {
        expect(response).toBe('teste')
    })
})