export async function cadastrar(equipamento) {
    const sql = "INSERT INTO equipamentos (codigoPatrimonio, nome, setor) VALUES (?,?,?)"
    const [resultado] = await Pool.execute(sql,[equipamento.codigoPatrimonio, equipamento.nome, equipamento.setor]);
    return {id: resultado.insertId}
}

export async function listar() {
    const [linhas] = await Pool.execute("SELECT * FROM equipamentos")
    return linhas
}

export async function buscarPorId(id) {
    const [linhas] = await Pool.execute ("SELECT * FROM equipamentos WHERE id=?",[id]);
    return linhas [0];
}

export async function atualizar(id, equipamento) {
    const [linhas] = await Pool.execute ("SELECT * FROM equipamentos WHERE id=?",[id]);
}

export async function deletar(id) {
    const [resultado] = await Pool.execute("DELETE FROM calibracoes WHERE id=?", [id]);
    return [resultado];
}
