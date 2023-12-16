import { useTranslation } from 'react-i18next';
import { message } from 'antd';

/**
 * Handles error messages based on the status code and error object.
 *
 * @param {number} status - The status code of the error.
 * @param {Error | null} error - The error object or null.
 * @return {void} - This function does not return a value.
 */
export function useHandleErrorMessage() {
    const { t } = useTranslation();

    const handleErrorMessage = (status: number, error: Error | null) => {
      let errorMessage = t('error.defaultError');
   
      if (status) {
         switch (status) {
         // Códigos de status 1xx
         case 100:
            errorMessage = t('error.continue');
            break;
         case 102:
            errorMessage = t('error.processing');
            break;
         case 103:
            errorMessage = t('error.protocolInteraction');
            break;
   
         // Códigos de status 2xx
         case 200:
            errorMessage = t('error.successRequest');
            break;
         case 201:
            errorMessage = t('error.createdRequest');
            break;
         case 204:
            errorMessage = t('error.noContent');
            break;
         case 206:
            errorMessage = t('error.partialContent');
            break;
   
         // Códigos de status 3xx
         case 301:
            errorMessage = t('error.movedPermanently');
            break;
         case 302:
            errorMessage = t('error.movedTemporarily');
            break;
         case 303:
            errorMessage = t('error.seeOther');
            break;
         case 304:
            errorMessage = t('error.notModified');
            break;
         case 307:
            errorMessage = t('error.redirect');
            break;
         case 308:
            errorMessage = t('error.redirect');
            break;
   
         // Códigos de status 4xx
         case 401:
            errorMessage = t('error.unauthorized');
            break;
         case 403:
            errorMessage = t('error.forbidden');
            break;
         case 404:
            errorMessage = t('error.notFound');
            break;
         case 406:
            errorMessage = t('error.contentValidation');
            break;
         case 407:
            errorMessage = t('error.proxyAuthentication');
            break;
         case 409:
            errorMessage = t('error.conflict');
            break;
         case 410:
            errorMessage = t('error.gone');
            break;
         case 412:
            errorMessage = t('error.preconditionFailed');
            break;
         case 416:
            errorMessage = t('error.requestedRangeNotSatisfiable');
            break;
         case 418:
            errorMessage = t('error.teapot');
            break;
         case 425:
            errorMessage = t('error.tooManyRequests');
            break;
         case 451:
            errorMessage = t('error.legalAccessDenied');
            break;
   
         // Códigos de status 5xx
         case 500:
            errorMessage = t('error.internalServerError');
            break;
         case 501:
            errorMessage = t('error.notImplemented');
            break;
         case 502:
            errorMessage = t('error.badGateway');
            break;
         case 503:
            errorMessage = t('error.serviceUnavailable');
            break;
         case 504:
            errorMessage = t('error.gatewayTimeout');
            break;
         default:
            errorMessage = t('error.defaultErrorWithCode', { code: status });
         }
      }
   
      // Tratamento de erros específicos
      if (error) {
         if (error.message === 'Network Error') {
            errorMessage = t('error.networkError');
         }
         // Adicione tratamento para outros erros específicos, se necessário
      }
     
      // Registrar o erro no console para depuração
      console.log('Erro:', error);
      // Exibir a mensagem de erro ao usuário
      return message.error(errorMessage);
   
   }

   return handleErrorMessage;
}