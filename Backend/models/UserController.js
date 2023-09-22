/*
    User Api handler
*/
// const dbClient = require('../storage/db');

class UserController {
  // methods for UserController used as callback for router middleware

  static async getUsers(req, res) {
    res.json('User Dashboard loaded successfully');
  }
}

module.exports = UserController;
