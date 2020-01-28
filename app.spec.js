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

afterAll((done) => {
    server.close(done);
});
