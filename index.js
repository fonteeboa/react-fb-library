// Importa a função para importação de estilos CSS
import { importCSS } from './assets/styles/cssImports';
// Executa a função importCSS para carregar os estilos CSS
importCSS();

// Carrega todos os componentes disponíveis no diretório 'components'
const Components = require('./components');
// Carrega as configurações de internacionalização (i18n) para suporte a múltiplos idiomas
const i18n = require('./i18n');
// Carrega as funções de requisição definidas na pasta 'infra/requests'
const requests = require('./infra/requests');

// Exporta todos os itens carregados
module.exports = {
    Components,
    requests,
    i18n,
};
