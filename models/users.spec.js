const db = require('../database/dbConfig.js');
const users = require('./users.js');


describe('users model', () => {
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('add', () => {
        it ('adds user to the db', async () => {
            const user = await db('users');
            expect(user).toHaveLength(0);
        })
    })

    describe('find all users', () => {
        it('finds all users', async () =>{
            const allUsers = await db('users');
            expect(allUsers).toHaveLength(500)
        })
    })
})