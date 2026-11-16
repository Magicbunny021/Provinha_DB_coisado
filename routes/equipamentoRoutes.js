import { Router } from "express";
import {
  cadastrarEquipamento,
  listarEquipamentos,
  buscarEquipamentoPorId,
  atualizarEquipamento,
  deletarEquipamento
} from "../controller/equipamentoController.js";

const router = Router();

router.post("/", cadastrarEquipamento);
router.get("/", listarEquipamentos);
router.get("/:id", buscarEquipamentoPorId);
router.patch("/:id", atualizarEquipamento);
router.delete("/:id", deletarEquipamento);

export default router;
