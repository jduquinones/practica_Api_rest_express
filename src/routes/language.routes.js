import { Router } from "express";
import { methods as languageController } from "../controllers/language.controllers";
const router = Router();


router.get("/", languageController.getLanguages);
router.get("/:id", languageController.getLanguage);
router.post("/", languageController.addLanguages);
router.put("/:id", languageController.updateLanguages);
router.delete("/:id", languageController.deleteLanguages);

export default router;