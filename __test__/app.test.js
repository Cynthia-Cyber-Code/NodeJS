const request = require('supertest');
const app = require('../app');

describe('GET /api/', () => {
    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/')
        .expect('Content-Type', /json/)
        .expect(200);
    });
})

// describe('GET /api/user', () => {
//     it('should return a 200', async () => {
//         const res = await request(app)
//         .get('/api/user')
//         .expect('Content-Type', /json/)
//         .expect(200);
//     });
// })

describe('GET /api/reservation', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/reservation')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})

describe('GET /api/spot', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/spot')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})

describe('GET /api/room', () => {
    it('should return a 401 error', async () => {
        const res = await request(app)
        .get('/api/room')
        .expect('Content-Type', /json/)
        .expect(401);
    });
})