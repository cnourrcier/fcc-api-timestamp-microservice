# Timestamp Microservice

This is my Timestamp Microservice Back End Development and APIs Project for freecodecamp.org. I used the provided [boilerplate](https://github.com/freeCodeCamp/boilerplate-project-timestamp/) to complete this challenge. The test requirements can be found [here](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/timestamp-microservice).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/cnourrcier/fcc-api-timestamp-microservice.git
```

2. Install dependencies:

```bash
cd fcc-api-timestamp-microservice
npm install
```

## Usage

1. Start the server:

```bash
npm run dev
```

## API Endpoints

|   Endpoint    |  Description  |
| ------------- | ------------- |
| GET /api/{dateParam} | Receive a valid date param and send a json object containing a unix timestamp and UTC date string. If date param is not valid, send an error response. |

## License

This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details. 

