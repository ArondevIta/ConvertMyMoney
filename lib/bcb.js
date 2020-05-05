const axios = require('axios')
const date = new Date()
const dia = date.getDay()
const mes = date.getMonth()
const ano = date.getFullYear()
const data = `${mes}-${dia}-${ano}`
const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='${data}'&$top=100&$format=json`

const getCotacaoAPI = (data) => axios.get(url)
const extractCotacao = res => res.data.value[0].cotacaoVenda
const getCotacao = async() => {
  const res = await getCotacaoAPI('')
  const cotacao = extractCotacao(res)
  return cotacao
}

module.exports = {
  getCotacaoAPI,
  getCotacao,
  extractCotacao
}
