const request = require('supertest');
const app = require("./app.js")
let server;

beforeAll((done) => {
    server = app.listen(process.env.PORT || 3000, () => {
        console.log(`Server running on port ${process.env.PORT || 3000}.`);
        done()
    });
});

describe('GET /', () => {
    it('respond with "lack of documentation"', async (done) => {
        request(app)
            .get("/")
            .expect(200, {
                message: "lack of documentation."
            }, done)
    });
});

describe("POST /", () => {
    it("respond with 201", async (done) => {
        const res = await request(app)
            .post("/").send({
                email: "firstname lastname",
                password: "password"
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("message")
        expect(res.body).toHaveProperty("user");
        expect(res.body.user.email).toEqual("firstname lastname");
        expect(res.body.user.password).toEqual("password");
        done();
    });
});

describe("PUT /", () => {
    it("respond with 200", async (done) => {
        const res = await request(app).put("/")
            .send({
                email: "email",
                password: "newpassword"
            })

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("path");
        expect(res.body).toHaveProperty("operation");
        expect(res.body.path).toEqual("/");
        expect(res.body.operation).toEqual("PUT");
        expect(res.body.user.password).toEqual("newpassword");
        done();

    });
});

afterAll((done) => {
    server.close(done);
});
