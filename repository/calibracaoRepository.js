export async function criarCalibracao(calibracao) {
    const sql = "INSERT INTO calibracoes (equipamentoId, dataCalibracao, resultado, responsavel) VALUES (?,?,?,?)"
    const [resultado] = await Pool.execute(sql,[calibracao.equipamentoId, calibracao.dataCalibracao, calibracao.resultado, calibracao.responsavel]);
    return {id: resultado.insertId}
}

export async function listarCalibracoes() {
    const [linhas] = await Pool.execute("SELECT * FROM calibracoes")
    return linhas
}

export async function listarCalibracoesDetalhadas() {
}

export async function buscarCalibracaoPorId(id) {
    const [linhas] = await Pool.execute ("SELECT * FROM calibracoes WHERE id=?",[id]);
    return linhas [0];
}

export async function atualizarCalibracao(id, calibracao) {
}

export async function excluirCalibracao(id) {
    const [resultado] = await Pool.execute("DELETE FROM calibracoes WHERE id=?", [id]);
    return [resultado];
}
