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