import nock from 'nock';
import path from 'path';
import { getCountriesAvailableMockResponse } from './response';

const SOAP_API_HOST = 'http://holidaywebservice.com';
const SOAP_API_PATH = '/HolidayService_v2/HolidayService2.asmx?WSDL';

/**
 * Returns a (mock) WSDL file when the `soap` package makes a request for the SOAP WSDL with `createClientAsync()`
 */
export const setupMockWSDL = () =>
  nock(SOAP_API_HOST)
    .get(SOAP_API_PATH)
    .replyWithFile(200, path.join(__dirname, './wsdl.xml'));

/**
 * Mocks the `GetCountriesAvailable` SOAP action, causing it to return the specified `code` and `description`
 * @param code Mock code
 * @param description Mock description
 */
export const setupGetCountriesAvailableMock = (
  code: string,
  description: string
) =>
  nock(SOAP_API_HOST, {
    reqHeaders: {
      soapaction: `"${SOAP_API_HOST}/HolidayService_v2/GetCountriesAvailable"`,
    },
  })
    .post('/HolidayService_v2/HolidayService2.asmx')
    .reply(200, getCountriesAvailableMockResponse(code, description));
