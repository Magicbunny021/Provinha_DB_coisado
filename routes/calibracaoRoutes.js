import { Router } from "express";
import {
  cadastrarCalibracao,
  listarCalibracoes,
  listarCalibracoesDetalhadas,
  buscarCalibracaoPorId,
  atualizarCalibracao,
  deletarCalibracao
} from "../controller/calibracaoController.js";

const router = Router();

router.post("/", cadastrar);
router.get("/", listar);
router.get("/detalhadas", listarDetalhadas);
router.get("/:id", buscarPorId);
router.patch("/:id", atualizar);
router.delete("/:id", excluir);

export default router;
