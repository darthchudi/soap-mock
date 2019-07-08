import soap from 'soap';
import express from 'express';

const app = express();

const SOAP_API_URL =
  'http://holidaywebservice.com/HolidayService_v2/HolidayService2.asmx?WSDL';

/**
 * Makes a call to a SOAP client to get all available holiday countries
 */
app.get('/countries', async (req, res) => {
  const client = await soap.createClientAsync(SOAP_API_URL);
  const [result] = await client.GetCountriesAvailableAsync();
  res.status(200).json(result.GetCountriesAvailableResult.CountryCode[0]);
});

export default app;
