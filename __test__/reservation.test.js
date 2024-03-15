const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");

const { SECRET_KEY } = process.env;

/* Tests reservations */
describe("GET /api/reservations", () => {
  it("should return a 401 error", async () => {
    const res = await request(app)
      .get("/api/reservations")
      .expect("Content-Type", /json/)
      .expect(401);
    return res;
  });
});

describe("GET /api/reservations", () => {
  it("should return a 200 error", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });

    const res = await request(app)
      .get("/api/reservations")
      .expect("Content-Type", /json/)
      .set("Authorization", token)
      .expect(200);
    return res;
  });
});

describe("Post /api/reservations", () => {
  it("should return a 200 error", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const reservation = {
      numberOfCustomers: 8,
      reservationDate: "2026-01-01",
      reservationName: "Marthy",
      reservationNote: "Pas de note",
      reservationStatus: 1,
    };

    const res = await request(app)
      .post("/api/reservations")
      .set("Authorization", token)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(reservation)
      .expect(200);
    return res;
  });
});

describe("Put /api/reservations", () => {
  it("should return a 200 error", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const reservation = {
      reservationId: 1,
      numberOfCustomers: 8,
      reservationDate: "2021-01-01",
      reservationName: "Marthy",
      reservationNote: "Pas de note",
      userId: 1,
    };
    console.log(token, payload, reservation);
    const res = await request(app)
      .put("/api/reservations")
      .set("Authorization", token)
      .send(reservation)
      .expect(200);
    return res;
  });
});

describe("Delete /api/reservations", () => {
  it("should return a 200 error", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const reservation = {
      reservationId: 5,
    };
    console.log(token, payload, reservation);
    const res = await request(app)
      .delete("/api/reservations/")
      .set("Authorization", token)
      .send(reservation)
      .expect(200);
    return res;
  });
});
