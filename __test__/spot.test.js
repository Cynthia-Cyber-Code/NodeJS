const request = require("supertest");
const jwt = require("jsonwebtoken");
const app = require("../app");

const { SECRET_KEY } = process.env;

/* Tests spots */
describe("GET /api/spots", () => {
  it("should return a 401 error", async () => {
    const res = await request(app)
      .get("/api/spots")
      .expect("Content-Type", /json/)
      .expect(401);
    return res;
  });
});

describe("GET /api/spots/all", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 60 });

    const res = await request(app)
      .get("/api/spots/all")
      .expect("Content-Type", /json/)
      .set("Authorization", token)
      .expect(200);
    return res;
  });
});

describe("Post /api/spots", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const spot = {
      name: "view facing the sea",
      roomId: 1
    };

    const res = await request(app)
      .post("/api/spots")
      .set("Authorization", token)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(spot)
      .expect(200);
    return res;
  });
});

describe("Put /api/spots", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const spot = {
      spotId: 2,
      name: "Nearby to the toilet",
      roomId: 1
    };
    console.log(token, payload, spot);
    const res = await request(app)
      .put("/api/spots")
      .set("Authorization", token)
      .send(spot)
      .expect(200);
    return res;
  });
});

describe("Delete /api/spots", () => {
  it("should return a 200", async () => {
    const payload = {
      id: 1,
      email: "example@example.com",
      userPassword: "Azerty1234",
      userRole: "isAdmin",
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: 20 });

    const spot = {
      spotId: 2,
    };
    console.log(token, payload, spot);
    const res = await request(app)
      .delete("/api/spots/")
      .set("Authorization", token)
      .send(spot)
      .expect(200);
    return res;
  });
});
