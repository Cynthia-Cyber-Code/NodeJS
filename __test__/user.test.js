const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");

const { SECRET_KEY } = process.env;

/* Tests users */
describe("GET /api/users", () => {
  it("should return a 401 error", async () => {
    const res = await request(app)
      .get("/api/users")
      .expect("Content-Type", /json/)
      .expect(401);
    return res;
  });
});

describe("GET /api/users", () => {
  const payload = {
    id: 1,
    email: "example@example.com",
    userPassword: "Azerty1234",
    userRole: "isAdmin",
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

  it("should return a 200", async () => {
    const res = await request(app)
      .get("/api/users")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200);
    return res;
  });
});

describe("GET /api/users/me", () => {
  const payload = {
    id: 1,
    email: "example@example.com",
    userPassword: "Azerty1234",
    userRole: "isAdmin",
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

  it("should return a 200", async () => {
    const res = await request(app)
      .get("/api/users/me")
      .set("Authorization", token)
      .expect("Content-Type", /json/)
      .expect(200);
    return res;
  });
});

describe("Put /api/users", () => {
  it("should return a 200 error", async () => {
    const payload = {
      id: 1,
      eemail: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const user = {
      firstName: "Jeanne",
      lastName: "Doe",
    };
    console.log(token, payload, user);
    const res = await request(app)
      .put("/api/users")
      .set("Authorization", token)
      .send(user)
      .expect(200);
    return res;
  });
});
