// Importa a função para importação de estilos CSS
import { importCSS } from './assets/styles/cssImports';
// Executa a função importCSS para carregar os estilos CSS
importCSS();

// Carrega todos os componentes disponíveis no diretório 'components'
const AllComponents = require('./components');

// Exporta todos os itens carregados
module.exports = {
    AllComponents,
};
