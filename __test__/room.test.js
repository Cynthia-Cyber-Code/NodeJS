const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");

const { SECRET_KEY } = process.env;

/* Tests rooms */
describe("GET /api/rooms", () => {
  it("should return a 401 error", async () => {
    const res = await request(app)
      .get("/api/rooms")
      .expect("Content-Type", /json/)
      .expect(401);
    return res;
  });
});

describe("GET /api/rooms/rooms", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });

    const res = await request(app)
      .get("/api/rooms/rooms")
      .expect("Content-Type", /json/)
      .set("Authorization", token)
      .expect(200);
    return res;
  });
});

describe("Post /api/rooms", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const room = {
        name: "Nearby to the bar",
    };

    const res = await request(app)
      .post("/api/rooms")
      .set("Authorization", token)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(room)
      .expect(200);
    return res;
  });
});

describe("Put /api/rooms", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const room = {
      roomId: 2,
      name: "Nearby to the toilet",
    };
    console.log(token, payload, room);
    const res = await request(app)
      .put("/api/rooms")
      .set("Authorization", token)
      .send(room)
      .expect(200);
    return res;
  });
});

describe("Delete /api/rooms", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const room = {
      roomId: 2,
    };
    console.log(token, payload, room);
    const res = await request(app)
      .delete("/api/rooms/")
      .set("Authorization", token)
      .send(room)
      .expect(200);
    return res;
  });
});
