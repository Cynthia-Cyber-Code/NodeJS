const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

describe('GET /api/', () => {
    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/')
        .expect(200);
    });
});

describe('POST /api/auth/signup', () => {
    it('should return a 403 error', async () => {
        const res = await request(app)
        .post('/api/auth/signup')
        .expect('Content-Type', /json/)
        .send({
            firstname : "Simon",
            lastname : "Smith",
            email : "SSmith@mail.com",
            phone : "00.00.00.00.00",
            user_password : "ABCDE12345"
        })
        .expect(403);
    });
});

describe('POST /api/auth/signup', () => {
    it('should return a 400 error', async () => {
        const res = await request(app)
        .post('/api/auth/signup')
        .expect('Content-Type', /json/)
        .send({
            firstname : "Simon",
            lastname : "Smith",
            email : "mail.com",
            phone : "00.00.00.00.00",
            user_password : "ABCDE12345"
        })
        .expect(400);
    });
});

describe('POST /api/auth/signin', () => {
    it('should return a 200', async () => {
        const res = await request(app)
        .post('/api/auth/signin')
        .expect('Content-Type', /json/)
        .send({
            firstname : "Marthy",
            lastname : "Smith",
            email : "MSmith@mail.com",
            user_password : "123"
        })
        .expect(200);
    });
});

/* Tests users */
describe('GET /api/users', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/users')
        .expect('Content-Type', /json/)
        .expect(401);
    });
});

describe('GET /api/users', () => {
    const payload = {
        lastname: "Marthy",
        firstname : "Smith",
        email: "MSmith@mail.com",
        user_password : "123"
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60});

    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/users')
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

describe('GET /api/users/me', () => {
    const payload = {
        lastname: "Marthy",
        firstname : "Smith",
        email: "MSmith@mail.com",
        user_password : "123"
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 * 60});

    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/users/me')
        .send({
            userId: 7
        })
        .set('Authorization', token)
        .expect('Content-Type', /json/)
        .expect(200);
    });
});

/* Tests reservations */
describe('GET /api/reservations', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/reservations')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})

/* Tests spots */
describe('GET /api/spots', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/spots')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})

/* Tests rooms */
describe('GET /api/rooms', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/rooms')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})