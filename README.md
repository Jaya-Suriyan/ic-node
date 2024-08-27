# ic-node

I customer test

1. npm install
2. npm run start

edit this file for database ic-node\config\config.json

create .env file
NODE_ENV=development

create new migration

# npx sequelize-cli model:generate --name User --attributes username:string,password:string

# npx sequelize-cli model:generate --name Product --attributes productname:string,category:string,record_count:number,field_list:array

To run app:

npm run start

Project Setup:
Clone the repository: git clone [<repository-url>](https://github.com/Jaya-Suriyan/ic-node)
Install dependencies:
npm install

Instructions for database setup.
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all

Run the application:
npm start

Access the application at http://localhost:5000 (or the respective port).

Authentication Details:
Provide sample business user credentials for testing (e.g., username: admin, password: admin).
