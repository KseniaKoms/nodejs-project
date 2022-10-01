const express = require("express");
const ctrl = require("../../controllers/contacts");

const { validateBody, isValidId } = require("../../middlewares");

const { schemas } = require("../../models/contacts");
const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.addContact);

router.delete("/:id", isValidId, ctrl.removeContact);

router.put("/:id", isValidId, validateBody(schemas.addSchema), ctrl.updateById);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateFavorite
);

module.exports = router;
