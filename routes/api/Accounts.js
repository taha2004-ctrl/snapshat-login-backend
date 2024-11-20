const { Router } = require("express");
const AccountModel = require("../../schema/Account");

const router = Router();

router.post("/", async (request, response) => {
  const newAccount = new AccountModel(req.body);
  try {
    const account = await newAccount.save();
    if (!account) throw new Error("Something went wrong in saving the account");
    response.status(201).json(account);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
});

router.get('/' , (request , response) => {
    response.status(200).json({message : 'taha ahmed bouteffah'})
})

module.exports = router;
