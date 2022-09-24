const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getContactById);

router.post("/", ctrl.addContact);

router.delete("/:id", ctrl.removeContact);

router.put("/:id", ctrl.updateById);

module.exports = router;
