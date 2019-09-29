const server = require('../../../../app');
const request = require('supertest')(server);

describe('Movie API tests', () => {

    it('should create a single movie', async () => {

        const movieToCreat = {
            year: '2019',
            title: 'The Big Test',
            studios: '20th Century Fox',
            producers: 'Yuri L Caldeira',
            winner: 'true'
        }

        const { body } = await request.post('/api/v1/movies')
            .set('Accept', 'application/json')
            .send(movieToCreat)
            .expect(201)
            .then();

        expect(body).toEqual(expect.objectContaining({
            content: {
                id: expect.any(Number),
                year: '2019',
                title: 'The Big Test',
                studios: '20th Century Fox',
                producers: 'Yuri L Caldeira',
                winner: 'true'
            }
        }))
    });
});