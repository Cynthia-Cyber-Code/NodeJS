# NodeJS
Project Node JS sequence 3: BookingHotelApp

# Back-end
## Getting Started with Express generator

This project was bootstrapped with [Express generator](https://github.com/expressjs/generator).
with `npx express bookingHotelApp --no-view`

### `npm start`

Runs the app in the development mode.\
# env-variable

A cross platform `env-variable` for browsers and node. Of course, browsers
doesn't have environment variables but we do have hashtags and localStorage
which we will use as fallback. It must contain a port number.

if there is no port in environment, Open [http://localhost:3000](http://localhost:3000).

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Add a bdd format Postgres according to pre-established diagrams
<p>
 <h3>UseCase diagram</h3>
 <img src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/797db09b-db6d-4aba-a7de-254db84fe508" width="350" title="Capture_decran_2023-08-30_a_09 11 49">
</p>
<p>
 <h3>Uml diagram</h3>
 <img src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/7b108113-28da-4360-8353-8153c34aa3c8" width="350" title="Capture_decran_2023-08-30_a_16 47 52">
</p>

## PostgreSQL also known as Postgres, is a free and open-source relational database management system.

  * Creation of the Database with dedicated tables and fields
      * Use the express framework
  
  * Implementation of CRUD(Create, read, update, delete) for the different routes of the database
    * Use [sequelize](https://sequelize.org/), Sequelize is a promise-based Node.js ORM tool for Postgres.
    * Use [sequelize CLI](https://github.com/sequelize/cli), This is lhe Sequelize Command Line Interface (CLI).
       create following folders: 
         * config, contains config file, which tells CLI how to connect with database
         * models, contains all models for your project
         * migrations, contains all migration files
         * seeders, contains all seed files
   It requires adding its config.json to run the back-end.
  
  * Creation of different db (db-development, db-production, db-test)
  
  * Add Athentification
    * use [bycript framework](https://github.com/kelektiv/node.bcrypt.js) to encrypt the password.
    * use [jsonwebtoken framework](https://github.com/auth0/node-jsonwebtoken) to return a token and to secure the database routes.
       * [JWT](https://jwt.io/)
  
  * Add test for the route GET: http://localhost:3000/api/reservations with Jest ans Supertest
    * Jest, Testing Web Frameworks
    * [Supertest](https://github.com/visionmedia/supertest)

### `npm test`

Launches the test runner in the interactive watch mode.

#Resultat
## For Sign in
<div>
 <p>Console</p>
 <img width="523" alt="Capture d’écran" src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/292803ac-0a5c-4e88-a342-16b6392355d6">
</div>
<div>
  <p>Postman</p>
  <img src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/788d9997-bd54-4935-8050-b0241145741a" width="350" title="Capture_decran">
 </div>

## For Sign up
 <div>
 <p>Console</p>
 <img width="523" alt="Capture d’écran" src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/5d214f4f-3b27-4b0d-9652-3993c45b3823">

</div>
<div>
  <p>Postman</p>
  <img src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/18a6294d-70a7-43a8-8201-1c9306ce003b" width="350" title="Capture_decran">

 </div>

##For [route for user current](http://localhost:3000/api/users/me)
 <div>
 <p>Console</p>
 <img width="523" alt="Capture d’écran" src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/75645987-05a8-4df5-830f-16263f324765">
</div>

<div>
  <p>Postman</p>
  <img src="https://github.com/Cynthia-Cyber-Code/NodeJS/assets/80052585/788d9997-bd54-4935-8050-b0241145741a" width="350" title="Capture_decran">
 </div>


# Tools Used
  * IDE: Visual Studio Code
  * Web browser: Google Chrome
  * Native and graphical database management tool: Table Plus	
  * Postman: Application for testing APIs
  
# Resources consulted
    * Nodejs: (Nodejs.org), (https://docs.npmjs.com)
    * Express: (Expressjs.com), (https://docs.npmjs.com), (https://github.com/expressjs/express)
    * Sequelize: (https://sequelize.org/)
    * sequelize CLI: (https://github.com/sequelize/cli)
    * Jest, Testing Web Frameworks: (https://jestjs.io/fr/docs/getting-started)
    * Supertest: (https://github.com/visionmedia/supertest)
