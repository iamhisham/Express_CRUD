import express from "express";
const router = express.Router();

import {
  getContact,
  createContact,
  deletestudent,
  editstudent,
  getone,
} from "../controllers/studentController.js";
import contact from "../Models/Contact.js";
router.get("/", getContact);
router.get("/:id", getone);
router.post("/", createContact);
router.delete("/:id", deletestudent);
router.put("/:id", editstudent);
export default router;
