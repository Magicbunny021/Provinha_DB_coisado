export async function cadastrar(calibracao) {
    const sql = "INSERT INTO calibracoes (equipamentoId, dataCalibracao, resultado, responsavel) VALUES (?,?,?,?)"
    const [resultado] = await Pool.execute(sql,[calibracao.equipamentoId, calibracao.dataCalibracao, calibracao.resultado, calibracao.responsavel]);
    return {id: resultado.insertId}
}

export async function listar() {
    const [linhas] = await Pool.execute("SELECT * FROM calibracoes")
    return linhas
}

//listagem detalhada usa JOIN e retorna a calibração com código e nome do equipamento relacionado.
export async function listarDetalhadas() {
    const [linha] = await Pool.execute("SELECT calibracoes.equipamento_id equipamentos.nome FROM calibracoes")
}

export async function buscarPorId(id) {
    const [linhas] = await Pool.execute ("SELECT * FROM calibracoes WHERE id=?",[id]);
    return linhas [0];
}

export async function atualizar(id, calibracao) {
    const [linhas] = await Pool.execute ("UPDATE SET calibracoes ",[id]);
}

export async function deletar(id) {
    const [resultado] = await Pool.execute("DELETE FROM calibracoes WHERE id=?", [id]);
    return [resultado];
}
