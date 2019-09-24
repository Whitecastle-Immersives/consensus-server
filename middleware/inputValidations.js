const { check } = require("express-validator");

module.exports = {
  validate: method => {
    switch (method) {
      case "signin": {
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
