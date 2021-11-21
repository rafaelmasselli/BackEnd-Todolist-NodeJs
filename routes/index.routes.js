const express = require("express");
const controller = require("./../controller/index.controller");

const router = express.Router();
const ControllerT = new controller();

router.get("/", ControllerT.getTarefas);

router.get("/:id", ControllerT.getByid);

router.post("/New", ControllerT.creatTarefas);

router.put("/:id", ControllerT.EditTarefas);

router.delete("/:id", ControllerT.DeleteTareafa);

module.exports = router;
