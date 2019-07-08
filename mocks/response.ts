/**
 * Returns a mock XML response for `GetCoutriesAvailable` SOAP action
 * @param code Mock code
 * @param description Mock description
 */
export const getCountriesAvailableMockResponse = (
  code: string,
  description: string
) => `<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
<soap:Body>
  <GetCountriesAvailableResponse xmlns="http://www.holidaywebservice.com/HolidayService_v2/">
    <GetCountriesAvailableResult>
      <CountryCode>
        <Code>${code}</Code>
        <Description>${description}</Description>
      </CountryCode>
      <CountryCode />
    </GetCountriesAvailableResult>
  </GetCountriesAvailableResponse>
</soap:Body>
</soap:Envelope>`;
