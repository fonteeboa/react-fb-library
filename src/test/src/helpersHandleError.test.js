import { useHandleErrorMessage } from '../../helpers/handleError';
import { message } from 'antd';

jest.mock('antd', () => ({
    message: {
        error: jest.fn(),
    },
}));

/*
Atualmente este arquivo contem apenas testes de erro.
E posteriormente seram criados novos testes integrados ao response do fetch
*/

describe('useHandleErrorMessage', () => {
    let handleErrorMessage;

    beforeEach(() => {
        handleErrorMessage = useHandleErrorMessage();
    });
    // Testes para erros de rede
    it('handles a network error', () => {
        const handleErrorMessage = useHandleErrorMessage();
        const networkError = new Error('Network Error');
        handleErrorMessage(null, networkError);

        expect(message.error).toHaveBeenCalledWith('error.networkError');
    });
    // Testes para erros de status desconhecido
    it('handles an unknown error status', () => {
        const handleErrorMessage = useHandleErrorMessage();
        handleErrorMessage(999, null);

        expect(message.error).toHaveBeenCalledWith('error.defaultErrorWithCode');
    });

    // Testes para códigos de status 1xx
    it(`handles status code 100`, () => {
        handleErrorMessage(100, null);
        expect(message.error).toHaveBeenCalledWith('error.continue');
    });

    it(`handles status code 102`, () => {
        handleErrorMessage(102, null);
        expect(message.error).toHaveBeenCalledWith('error.processing');
    });

    it(`handles status code 103`, () => {
        handleErrorMessage(103, null);
        expect(message.error).toHaveBeenCalledWith('error.protocolInteraction');
    });
    // Testes para códigos de status 2xx
    it(`handles status code 200`, () => {
        handleErrorMessage(200, null);
        expect(message.error).toHaveBeenCalledWith('error.successRequest');
    })

    it(`handles status code 201`, () => {
        handleErrorMessage(201, null);
        expect(message.error).toHaveBeenCalledWith('error.createdRequest');
    })

    it(`handles status code 204`, () => {
        handleErrorMessage(204, null);
        expect(message.error).toHaveBeenCalledWith('error.noContent');
    })

    it(`handles status code 206`, () => {
        handleErrorMessage(206, null);
        expect(message.error).toHaveBeenCalledWith('error.partialContent');
    })

    // Testes para códigos de status 3xx
    it(`handles status code 301`, () => {
        handleErrorMessage(301, null);
        expect(message.error).toHaveBeenCalledWith('error.movedPermanently');
    })

    it(`handles status code 302`, () => {
        handleErrorMessage(302, null);
        expect(message.error).toHaveBeenCalledWith('error.movedTemporarily');
    })

    it(`handles status code 303`, () => {
        handleErrorMessage(303, null);
        expect(message.error).toHaveBeenCalledWith('error.seeOther');
    })

    it(`handles status code 304`, () => {
        handleErrorMessage(304, null);
        expect(message.error).toHaveBeenCalledWith('error.notModified');
    })

    it(`handles status code 307`, () => {
        handleErrorMessage(307, null);
        expect(message.error).toHaveBeenCalledWith('error.redirect');
    })

    const statusCodes3xx = [307, 308];
    statusCodes3xx.forEach((status) => {
        it(`handles status code ${status}`, () => {
            handleErrorMessage(status, null);
            expect(message.error).toHaveBeenCalledWith('error.redirect');
        });
    });

    // Testes para códigos de status 4xx
    it('handles status code 401', () => {
        handleErrorMessage(401, null);
        expect(message.error).toHaveBeenCalledWith('error.unauthorized');
    });

    it('handles status code 403', () => {
        handleErrorMessage(403, null);
        expect(message.error).toHaveBeenCalledWith('error.forbidden');
    });

    it('handles status code 404', () => {
        handleErrorMessage(404, null);
        expect(message.error).toHaveBeenCalledWith('error.notFound');
    });

    it('handles status code 406', () => {
        handleErrorMessage(406, null);
        expect(message.error).toHaveBeenCalledWith('error.contentValidation');
    });

    it('handles status code 407 - Proxy Authentication Required', () => {
        handleErrorMessage(407, null);
        expect(message.error).toHaveBeenCalledWith('error.proxyAuthentication');
    });

    it('handles status code 409 - Conflict', () => {
        handleErrorMessage(409, null);
        expect(message.error).toHaveBeenCalledWith('error.conflict');
    });

    it('handles status code 410 - Gone', () => {
        handleErrorMessage(410, null);
        expect(message.error).toHaveBeenCalledWith('error.gone');
    });

    it('handles status code 412 - Precondition Failed', () => {
        handleErrorMessage(412, null);
        expect(message.error).toHaveBeenCalledWith('error.preconditionFailed');
    });

    it('handles status code 416 - Requested Range Not Satisfiable', () => {
        handleErrorMessage(416, null);
        expect(message.error).toHaveBeenCalledWith('error.requestedRangeNotSatisfiable');
    });

    it('handles status code 418 - Teapot', () => {
        handleErrorMessage(418, null);
        expect(message.error).toHaveBeenCalledWith('error.teapot');
    });

    it('handles status code 425 - Too Many Requests', () => {
        handleErrorMessage(425, null);
        expect(message.error).toHaveBeenCalledWith('error.tooManyRequests');
    });

    it('handles status code 451 - Legal Access Denied', () => {
        handleErrorMessage(451, null);
        expect(message.error).toHaveBeenCalledWith('error.legalAccessDenied');
    });
    
    // Testes para códigos de status 5xx
    it('handles status code 500 - Internal Server Error', () => {
        handleErrorMessage(500, null);
        expect(message.error).toHaveBeenCalledWith('error.internalServerError');
    });

    it('handles status code 501 - Not Implemented', () => {
        handleErrorMessage(501, null);
        expect(message.error).toHaveBeenCalledWith('error.notImplemented');
    });

    it('handles status code 502 - Bad Gateway', () => {
        handleErrorMessage(502, null);
        expect(message.error).toHaveBeenCalledWith('error.badGateway');
    });

    it('handles status code 503 - Service Unavailable', () => {
        handleErrorMessage(503, null);
        expect(message.error).toHaveBeenCalledWith('error.serviceUnavailable');
    });

    it('handles status code 504 - Gateway Timeout', () => {
        handleErrorMessage(504, null);
        expect(message.error).toHaveBeenCalledWith('error.gatewayTimeout');
    });

});

