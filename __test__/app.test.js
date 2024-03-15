const request = require("supertest");
const app = require("../app");

describe("GET /api/", () => {
  it("should return a 200", async () => {
    const res = await request(app).get("/api/").expect(200);
    return res;
  });
});

describe("POST /api/auth/signup", () => {
  it("should return a 403 error", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .expect("Content-Type", /json/)
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "example@example.com",
        phone: "00.00.00.00.00",
        userPassword: "Azerty1234",
      })
      .expect(403);
    return res;
  });
});

describe("POST /api/auth/signup", () => {
  it("should return a 400 error", async () => {
    const res = await request(app)
      .post("/api/auth/signup")
      .expect("Content-Type", /json/)
      .send({
        firstName: "John",
        lastName: "Doe",
        email: "example.com",
        phone: "00.00.00.00.00",
        userPassword: "Azerty1234",
      })
      .expect(400);
    return res;
  });
});

describe("POST /api/auth/signin", () => {
  it("should return a 200", async () => {
    const res = await request(app)
      .post("/api/auth/signin")
      .expect("Content-Type", /json/)
      .send({
        email: "example@example.com",
        userPassword: "Azerty1234",
      })
      .expect(200);
    return res;
  });
});
