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
