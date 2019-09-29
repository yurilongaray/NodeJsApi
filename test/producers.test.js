const server = require('../app');
const request = require('supertest')(server);

describe('Producers API tests', () => {

    it('should return the faster and the lowest winner', async () => {

        const { body } = await request.get('/api/v1/producers/winners')
            .set('Accept', 'application/json')
            .send()
            .expect(200)
            .then();

        // expect(body).eq();
    });
});