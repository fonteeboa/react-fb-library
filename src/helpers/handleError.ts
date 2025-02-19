import { message } from 'antd';

/**
 * Hook para lidar com mensagens de erro com base no código de status e no objeto de erro.
 *
 * @return {Function} - Retorna uma função para manipulação de mensagens de erro.
 */
export function useHandleErrorMessage() {
  const handleErrorMessage = (status: number, error: Error | null): void => {
    let errorMessage: string = 'error.defaultError';

    // Mapeamento de mensagens de erro por status HTTP
    const statusMessages = new Map<number, string>([
      // Códigos de status 1xx
      [100, 'error.continue'],
      [102, 'error.processing'],
      [103, 'error.protocolInteraction'],

      // Códigos de status 2xx
      [200, 'error.successRequest'],
      [201, 'error.createdRequest'],
      [204, 'error.noContent'],
      [206, 'error.partialContent'],

      // Códigos de status 3xx
      [301, 'error.movedPermanently'],
      [302, 'error.movedTemporarily'],
      [303, 'error.seeOther'],
      [304, 'error.notModified'],
      [307, 'error.redirect'],
      [308, 'error.redirect'],

      // Códigos de status 4xx
      [401, 'error.unauthorized'],
      [403, 'error.forbidden'],
      [404, 'error.notFound'],
      [406, 'error.contentValidation'],
      [407, 'error.proxyAuthentication'],
      [409, 'error.conflict'],
      [410, 'error.gone'],
      [412, 'error.preconditionFailed'],
      [416, 'error.requestedRangeNotSatisfiable'],
      [418, 'error.teapot'],
      [425, 'error.tooManyRequests'],
      [451, 'error.legalAccessDenied'],

      // Códigos de status 5xx
      [500, 'error.internalServerError'],
      [501, 'error.notImplemented'],
      [502, 'error.badGateway'],
      [503, 'error.serviceUnavailable'],
      [504, 'error.gatewayTimeout'],
    ]);

    // Verifica se existe uma mensagem correspondente ao status
    errorMessage = statusMessages.get(status) || "error.defaultErrorWithCode";

    // Verifica se há erro de rede
    if (error?.message?.includes('Network Error')) {
      errorMessage = 'error.networkError';
    }

    console.error(`Erro [Status: ${status}]:`, error);

    // Exibe a mensagem de erro ao usuário
    message.error(errorMessage);
  };

  return handleErrorMessage;
}
