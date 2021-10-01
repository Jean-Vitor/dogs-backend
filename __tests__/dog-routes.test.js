const request = require('supertest');
const app = require('../app');

describe('Integrations tests', () => {
  it('verify if endpoint "/" is working', (done) => {
    request(app).get('/').expect(200, done);
  });

  // it('verify if endpoint "/api/dogs" is working', (done) => {
  //   request(app).get('/api/dogs').expect(200, done);
  // });

  // it('verify if endpoint "/api/dogs" is working', async (done) => {
  //   const res = await request(app).get('/api/dogs');
  //   console.log(res);
  //   done();
  // });
});
