const { check, valditionResult } = require("express-validator/check");

module.exports = {
  validate: method => {
    switch (method) {
      case "signup": {
        return [
          check("email", "Please include valid email").isEmail(),
          check(
            "password",
            "Please enter password with at least 6 characters long"
          ).isLength({ min: 6 })
        ];
      }
      case "login": {
        return [
          check("email", "Please include valid email")
            .isEmail()
            .not()
            .isEmpty(),
          check("password", "Password required ").exists()
        ];
      }
    }
  }
};
