<h1 align="center" id="title">Node.js Express Sequelize Boilerplate</h1>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

<p id="description">
    This is a boilerplate project for a Node.js application using the Express framework and Sequelize ORM. It provides a structured foundation for building scalable and maintainable server-side applications.
</p>

## ✨ Features

- **Express**: A minimal and flexible Node.js web application framework.
- **Sequelize**: A promise-based Node.js ORM for PostgreSQL, MySQL, MariaDB, SQLite, and Microsoft SQL Server.
- **PostgreSQL**: Using `pg` as the PostgreSQL client.
- **Environment Configuration**: Manage configuration settings using environment variables.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. 
- **jsonwebtoken**: For secure JWT token creation and verification.
- **bcryptjs**: For hashing and comparing passwords securely.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS).
- **moment-timezone**: Timezone support for moment.js.
- **Sequelize CLI**: (Development Dependency) Command-line interface for Sequelize.
<!-- - ESLint: A pluggable linting utility for JavaScript and JSX.
- Prettier: An opinionated code formatter to ensure consistent style.
- Jest: A delightful JavaScript testing framework with a focus on simplicity.
- Nodemon: A utility that automatically restarts the server when files change. -->

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/en/download/) (>= 16.x)
- [npm](https://www.npmjs.com/get-npm) (>= 8.x) or [yarn](https://classic.yarnpkg.com/en/docs/install) (>= 1.x)
- A SQL database (e.g., PostgreSQL, MySQL, SQLite)

## 🛠️ Installation Steps:

1. **Clone the repository:**
```bash
    git clone https://github.com/devinaacs/express-sequelize-boilerplate.git 
    cd express-sequelize-boilerplate
```

2. **Install dependencies:**

```bash
    npm install
    # or
    yarn install
```

3. **Set up environment variables:**

Create a .env file in the root of the project based on .env.example file, and add your environment variables. Example:

```
    NODE_ENV=development
    PORT=3000
    PG_HOST=localhost
    PG_USERNAME=root
    PG_PASSWORD=yourpassword
    PG_DATABASE=yourdatabase
```

## 🚀 Running the Application

1. Run database migrations:

```bash
    sequelize db:migrate
```

2. Run database seeders:

```bash
    sequelize db:seed:all
```

3. Start the development server:

```bash
    npm run start
    # or
    yarn start
```


## 📁 Project Structure
```lua
.
├── config
│   └── config.js
├── constants
│   └── exampleConstant.js
├── controllers
│   └── exampleController.js
├── helpers
│   └── exampleHelper.js
├── middlewares
│   └── exampleMiddleware.js
├── migrations
│   └── exampleMigration.js
├── models
│   ├── index.js
│   └── exampleModel.js
├── routes
│   └── exampleRoutes.js
├── seeders
│   └── exampleSeeders.js
├── services
│   └── exampleService.js
├── utils
│   └── exampleUtil.js
├── validators
│   └── exampleValidator.js
├── .env
├── .env.example
├── .gitignore
├── app.js  
├── package.json
└── README.md
```

- **config**: Configuration files for the application and database.
- **constants**: Files containing constants used throughout the application.
- **controllers**: Route handlers to separate request handling logic.
- **helpers**: Utility functions to be used across the application.
- **middlewares**: Express middlewares for handling requests.
- **migrations**: Sequelize migrations for database schema changes.
- **models**: Sequelize models and database schema definitions.
- **routes**: Route definitions for the application.
- **seeders**: Sequelize seeders for populating the database with initial data.
- **services**: Business logic separated from controllers.
- **utils**: Utility functions to support the application.
- **validators**: Validation logic for request data.

## 🤝 Contributing

Contributions are welcome! Please create an issue or submit a pull request for any changes.
  
  
## 📜 License
This project is licensed under the MIT License. See the [LICENSE](https://opensource.org/license/mit) file for more details.

```sql
You can copy this content into a `README.md` file in your project directory. Adjust any paths, configurations, and examples to fit your specific project setup.
```