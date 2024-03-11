const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');

const { SECRET_KEY } = process.env;

describe('GET /api/', () => {
  it('should return a 200', async () => {
    const res = await request(app)
      .get('/api/')
      .expect(200);
      return res
  });
});

describe('POST /api/auth/signup', () => {
  it('should return a 403 error', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .expect('Content-Type', /json/)
      .send({
        firstname: 'Corentin',
        lastname: 'marvin',
        email: 'CorentinM@mail.com',
        phone: '00.00.00.00.00',
        userPassword: 'Azerty1234',
      })
      .expect(403);
      return res
  });
});

describe('POST /api/auth/signup', () => {
  it('should return a 400 error', async () => {
    const res = await request(app)
      .post('/api/auth/signup')
      .expect('Content-Type', /json/)
      .send({
        firstname: 'Corentin',
        lastname: 'marvin',
        email: 'mail.com',
        phone: '00.00.00.00.00',
        userPassword: 'Azerty1234',
      })
      .expect(400);
      return res
  });
});

describe('POST /api/auth/signin', () => {
  it('should return a 200', async () => {
    const res = await request(app)
      .post('/api/auth/signin')
      .expect('Content-Type', /json/)
      .send({
        "email" : "NMBC@mail.com",
        "userPassword" : "Azerty1234"
      })
      .expect(200);
      return res
  });
});

/* Tests users */
describe('GET /api/users', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(401);
      return res
  });
});

describe('GET /api/users', () => {
  const payload = {
    id: 2,
    email : "CorentinM@mail.com",
    userPassword : "Azerty1234",
    userRole: 'isAdmin',
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

  it('should return a 200', async () => {
    const res = await request(app)
      .get('/api/users')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200);
      return res
  });
});

describe('GET /api/users/me', () => {
  const payload = {
    id: 2,
    email : "CorentinM@mail.com",
    userPassword : "Azerty1234",
    userRole: 'isAdmin',
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

  it('should return a 200', async () => {
    const res = await request(app)
      .get('/api/users/me')
      .set('Authorization', token)
      .expect('Content-Type', /json/)
      .expect(200);
      return res
  });
});

/* Tests reservations */
describe('GET /api/reservations', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/reservations')
      .expect('Content-Type', /json/)
      .expect(401);
      return res
  });
});

describe('GET /api/reservations', () => {
  it('should return a 200 error', async () => {
    const payload = {
      id: 32,
      email: 'CorentinM@mail.com',
      userPassword: 'Azerty1234',
      userRole: 'isAdmin',
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });

    const res = await request(app)
      .get('/api/reservations')
      .expect('Content-Type', /json/)
      .set('Authorization', token)
      .expect(200);
      return res
  });
});

describe('Post /api/reservations', () => {
  it('should return a 200 error', async () => {
    const payload = {
      id: 32,
      email: 'CorentinM@mail.com',
      userPassword: 'Azerty1234',
      userRole: 'isAdmin',
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const reservation = {
      numberOfCustomers: 8,
      reservationDate: '2026-01-01',
      reservationName: 'Marthy',
      reservationNote: 'Pas de note',
      reservationStatus: 1,
    };

    const res = await request(app)
      .post('/api/reservations')
      .set('Authorization', token)
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .send(reservation)
      .expect(200);
      return res
  });
});

// describe('Put /api/reservations', () => {
//   it('should return a 200 error', async () => {
//     const payload = {
//       id: 2,
//       email : "CorentinM@mail.com",
//       userPassword : "Azerty1234",
//       userRole: 'isAdmin',
//     };
//     const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

//     const reservation = {
//       reservationId: 5,
//       numberOfCustomers: 8,
//       reservationDate: "2021-01-01",
//       reservationName: "Marthy",
//       reservationNote: "Pas de note",
//       reservationStatus: 1,
//       userId: 2,
//       spotId: 1,
//       roomId: 3
//     };
//     console.log(token, payload, reservation);
//     const res = await request(app)
//       .put('/api/reservations')
//       .set('Authorization', token)
//       .send(reservation)
//       .expect(200);
//       return res
//   });
// });

describe('Delete /api/reservations', () => {
  it('should return a 200 error', async () => {
    const payload = {
      id: 2,
      email: 'CorentinM@mail.com',
      userPassword: 'Azerty1234',
      userRole: 'isAdmin',
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const reservation = {
      reservationId: 5,
    };
    console.log(token, payload, reservation);
    const res = await request(app)
      .delete('/api/reservations/')
      .set('Authorization', token)
      .send(reservation)
      .expect(200);
      return res
  });
});

/* Tests spots */
describe('GET /api/spots', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/spots')
      .expect('Content-Type', /json/)
      .expect(401);
      return res
  });
});

/* Tests rooms */
describe('GET /api/rooms', () => {
  it('should return a 401 error', async () => {
    const res = await request(app)
      .get('/api/rooms')
      .expect('Content-Type', /json/)
      .expect(401);
      return res
  });
});
