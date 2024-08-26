module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Root@My",
    DB: "email_support_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  