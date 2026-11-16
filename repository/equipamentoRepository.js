export async function criarEquipamento(equipamento) {
    const sql = "INSERT INTO equipamentos (codigoPatrimonio, nome, setor) VALUES (?,?,?)"
    const [resultado] = await Pool.execute(sql,[equipamento.codigoPatrimonio, equipamento.nome, equipamento.setor]);
    return {id: resultado.insertId}
}

export async function listarEquipamentos() {
    const [linhas] = await Pool.execute("SELECT * FROM equipamentos")
    return linhas
}

export async function buscarEquipamentoPorId(id) {
    const [linhas] = await Pool.execute ("SELECT * FROM equipamentos WHERE id=?",[id]);
    return linhas [0];
}

export async function atualizarEquipamento(id, equipamento) {
}

export async function excluirEquipamento(id) {
    const [resultado] = await Pool.execute("DELETE FROM calibracoes WHERE id=?", [id]);
    return [resultado];
}
