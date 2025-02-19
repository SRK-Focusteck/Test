const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const { expect } = chai;

require('dotenv').config({ path: './tests/acceptance/.env' });

describe('Acceptance Tests for API1 endpoint', () => {
    const API_BASE_URL = process.env.API_BASE_URL + 'api1';

    if (!API_BASE_URL) {
        throw new Error('API_BASE_URL is not defined in the .env file.');
    }

    it('should return status 200 for API1', async function () {
        this.timeout(30000);

        const apiResponse = await chai.request(API_BASE_URL).get('');
        expect(apiResponse).to.have.status(200);
    });

    it('should return correct response body for API1', async function () {
        this.timeout(30000);

        const apiResponse = await chai.request(API_BASE_URL).get('');
        expect(apiResponse).to.have.status(200);
        expect(apiResponse.body).to.be.an('object');
        expect(apiResponse.body).to.have.property('message', 'Response from API 1');
        expect(apiResponse.body).to.have.property('apiCode', 'API1');
    });
});
