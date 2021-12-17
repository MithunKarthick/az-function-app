const { readUser, createUser } = require("./crud");

module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const name = req.query.name || (req.body && req.body.name);

  try {
    const userTmp = await readUser(req.body);
    const user = {
      name: userTmp.name,
      email: userTmp.email,
      phone: userTmp.phone,
    };
    context.res = {
      body: user,
    };
  } catch (error) {
    context.res = {
      body: error.message,
    };
  }
};
