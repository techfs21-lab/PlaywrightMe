// utils/credentials.js
import 'dotenv/config';

export const credentials = [
    
    {
        username: process.env.STUDENT_USERNAME,
        password: process.env.STUDENT_PASSWORD,
        shouldSucceed: true,
    },
    

    {
        username: 'student',
        password: 'WrongPass',
        shouldSucceed: false,
    },
    {
        username: 'wronguser',
        password: 'Password123',
        shouldSucceed: false,
    },

    {
        username: 'incorrectUser',
        password: 'Password123',
        shouldSucceed: false,
    },

    {
        username: 'wronguser',
        password: 'PasswoincorrectPassword',
        shouldSucceed: false,
    },
];
