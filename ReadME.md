# Welcome to flight services

## Project setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project.
Create a `.env` file in the root directory and add following enciornemt variable
 - `PORT = 3000`
 - Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.
```
 {
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_search_DB_Dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  
 }
 ```

 - Once you have added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute
 `npx sequelize db:migrate`

## Tech Stack

- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **Body-parser**: Middleware for parsing incoming request bodies
- **Sequelize**: Promise-based Node.js ORM for relational databases
- **dotenv**: Module for loading environment variables


## DB Design 
 - Airplane Table 
 - Flight
 - Airport
 - City 

 - A flight belongs to an airplane but one airplane can be used in multiple flights
 - A city has many airports but one airport belongs to a city.
 - One airport can have many flights but a flight belongs to an airport.


## Tables

### City ->id,name,created_at,updated_at
### Airport ->id,name,address,city_id,created_at,updated_at
    Relationship -> City has many airports and Airport belongs to a city(one to many)

```
npx sequelize model:generate --name Airport --attributes name:string,address:String,cityId:Integer
```
