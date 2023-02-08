# Faketreon

Faketreon is a platform for supporting creatives through donations - meant to ape Patreon. It was made as part of a group project for Galvanized Inc's Operation Level up Code Bootcamp. It currently only displays data for a given faketreon campaign. The platform is built using React for the frontend and Express to implment a RESTful api for the backend. It also uses PostgreSQL for the database.


### Getting Started

   Clone the repository: 

   ```bash
   git clone https://github.com/JeremyEffinger/faketreon
   ```
  
   Navigate to the project directory:
  
  ```bash
   cd faketreon
   ```
  
   Install dependencies:
  ```bash
   yarn
  ```
   Set up the .env file for the database connection. The following environment variables should be set:
  
   ```bash
   FAKETREON_DB_URL=<DB_URL>
   Run the migrations file: psql -f migrations.pgsql
   ```
   Start the development server:
   ```bash
   yarn run dev
   ```

## Packages and Tools Used

   - React
   - React Router
   - Recoil
   - Express
   - PostgreSQL
   - Axios
   - Cors
   - Dotenv
   - Jest
   - Babel
   - SCSS
   - Vite

## Contributions

If you're interested in contributing to faketreon, feel free to fork the repository and create a pull request with your changes.
License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
