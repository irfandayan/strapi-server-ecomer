module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    // salt: env("API_TOKEN_SALT"),
    salt: "E7HM8FCkwofFZcWxTWC3A==",
  },
});
