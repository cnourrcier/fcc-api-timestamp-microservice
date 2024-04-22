## Project Description

This project is a simple Node.js application designed to serve as an API endpoint for timestamp conversion. It provides functionality to convert Unix timestamps or date strings to Unix time and Coordinated Universal Time (UTC). The API supports both query parameters and URL parameters for date input.

### Features:

- **Timestamp Conversion**: Convert Unix timestamps or date strings to Unix time and UTC.
- **API Endpoint**: Exposes an API endpoint `/api/:date?` for timestamp conversion.
- **Error Handling**: Handles invalid date inputs gracefully and returns an error message.

### How to Use:

1. **Accessing the API**: Send GET requests to the `/api/:date?` endpoint, where `:date` is an optional parameter representing the date to be converted.
2. **Date Input**: Provide either a Unix timestamp or a date string as the value for the `:date` parameter.
3. **Response Format**: The API returns JSON objects with `unix` and `utc` properties representing the Unix time and UTC respectively. If the input date is invalid, an error message is returned.

### Example Usage:

- Convert Unix timestamp to UTC:

```
GET /api/1620842400000
Response: { "unix": 1620842400000, "utc": "Wed, 12 May 2021 18:00:00 GMT" }
```

- Convert date string to UTC:

```
GET /api/2021-05-12
Response: { "unix": 1620777600000, "utc": "Wed, 12 May 2021 00:00:00 GMT" }
```

### Installation:

1. Clone or download the project files from the repository.
2. Install dependencies using npm: `npm install`
3. Run the application: `node index.js` or `npm start`
4. Access the API endpoint in your browser or through a tool like Postman, Thunder Client, or Hoppscotch.io.

### Credits:

This project was created as part of the freeCodeCamp curriculum. Special thanks to the freeCodeCamp community for providing resources and support.

### License:

This project is open-source and available under the [BSD 3-Clause License](LICENSE). Feel free to use, modify, and distribute it according to your needs.
