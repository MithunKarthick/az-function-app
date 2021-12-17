const { readUser, createUser } = require("./crud");

module.exports = async function (context, req) {
  context.log(">>>>Testing<<<<<");
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
