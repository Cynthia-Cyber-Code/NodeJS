const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.SECRET_KEY;

describe('GET /api/', () => {
    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/')
        .expect(200);
    })
});

describe('POST /api/auth/signup', () => {
    it('should return a 403 error', async () => {
        const res = await request(app)
        .post('/api/auth/signup')
        .expect('Content-Type', /json/)
        .send({
            firstname : "Corentin",
            lastname : "marvin",
            email : "CorentinM@mail.com",
            phone : "00.00.00.00.00",
            user_password : "Azerty1234"
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
            firstname : "Corentin",
            lastname : "marvin",
            email : "mail.com",
            phone : "00.00.00.00.00",
            user_password : "Azerty1234"
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
            "firstname" : "ALEC",
            "lastname" : "MARC",
            "email" : "pppp15@mail.com",
            "phone" : "00.00.00.00.00",
            "user_password" : "PPPPMMMMKJDE"
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
        id : 30,
        email : "pppp15@mail.com",
        user_password : "PPPPMMMMKJDE",
        user_role: "isAdmin"
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

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
        id : 32,
        email : "CorentinM@mail.com",
        user_password : "Azerty1234",
        user_role: "isAdmin"
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    it('should return a 200', async () => {
        const res = await request(app)
        .get('/api/users/me')
        .send({
            userId: 32
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

describe('GET /api/reservations', () => {
    it('should return a 200 error', async () => {
        const payload = {
            id : 32,
            email : "CorentinM@mail.com",
            user_password : "Azerty1234",
            user_role: "isAdmin"
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });
    
        const res = await request(app)
        .get('/api/reservations')
        .expect('Content-Type', /json/)
        .set('Authorization', token)
        .expect(200);
    });
})

describe('Post /api/reservations', () => {
    it('should return a 200 error', async () => {
        const payload = {
            id : 32,
            email : "CorentinM@mail.com",
            user_password : "Azerty1234",
            user_role: "isAdmin"
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

        const reservation = {
            number_of_customers : 8,
            reservation_date : "2026-01-01",
            reservation_name: "Marthy",
            reservation_note: "Pas de note",
            reservation_status: 1,
        };
        
        const res = await request(app)
        .post("/api/reservations")
        .set('Authorization', token)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        .send(reservation)
        .expect(200);
    });

})

describe('Put /api/reservations', () => {
    it('should return a 200 error', async () => {
        const payload = {
            id : 32,
            email : "CorentinM@mail.com",
            user_password : "Azerty1234",
            user_role: "isAdmin"
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

        const reservation = {
            reservationId: 6,
            number_of_customers : 8,
            reservation_date : "2026-01-01",
            reservation_name: "Salle",
            reservation_note: "Pas de note",
            reservation_status: 1,
        };
        console.log(token, payload, reservation)
        const res = await request(app)
        .put("/api/reservations")
        .set('Authorization', token)
        .send( reservation )
        .expect(200);
    });
})

describe('Delete /api/reservations', () => {
    it('should return a 200 error', async () => {
        const payload = {
            id : 32,
            email : "CorentinM@mail.com",
            user_password : "Azerty1234",
            user_role: "isAdmin"
        };
        const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

        const reservation = {
            reservationId: 6,
        };
        console.log(token, payload, reservation)
        const res = await request(app)
        .delete(`/api/reservations/`)
        .set('Authorization', token)
        .send( reservation )
        .expect(200);
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