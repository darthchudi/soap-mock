import supertest from 'supertest';
import nock from 'nock';
import app from '../src';
import { setupMockWSDL, setupGetCountriesAvailableMock } from '../mocks';

const server = supertest(app);

beforeAll(() => {
  setupMockWSDL();
});

afterAll(() => nock.cleanAll());

test('it mocks the SOAP action', async () => {
  const mockCode = 'Konoha';
  const mockDescription = 'Home of a bunch of wack ninjas!';

  setupGetCountriesAvailableMock(mockCode, mockDescription);

  const { body } = await server.get('/countries');

  expect(body.Code).toBe(mockCode);
  expect(body.Description).toBe(mockDescription);
});
