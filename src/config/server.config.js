process.loadEnvFile();

module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  LOGDB_URI: process.env.LOGDB_URI,
};
