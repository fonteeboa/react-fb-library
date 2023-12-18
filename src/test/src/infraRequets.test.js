import { makeFetchRequest, getService, postService, putService, deleteService, checkGetRequest } from '../../infra/requests';
import { spyMockResponse } from '../mock/fetchMock';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

global.sessionStorage = {
    getItem: jest.fn()
};

// Definindo um mock para sessionStorage.getItem
Object.defineProperty(window, 'sessionStorage', {
    value: {
        getItem: jest.fn().mockReturnValue('fake-token'),
    },
    writable: true
});

describe('Service Functions', () => {
    beforeEach(() => {
        jest.spyOn(global, 'fetch').mockImplementation(spyMockResponse);
        sessionStorage.getItem.mockClear();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('handles GET request correctly', async () => {
        fetch.mockResolvedValueOnce(new Response(JSON.stringify({ data: 'test' })));
        const params = { baseUrl: 'https://example.com', route: '/test' };
        const response = await makeFetchRequest(params, 'GET');

        expect(response).toEqual({ data: 'test' });
        expect(fetch).toHaveBeenCalledWith('https://example.com/test', expect.anything());
    });

    it('handles POST request correctly', async () => {
        fetch.mockResolvedValueOnce(new Response(JSON.stringify({ success: true })));
        const params = {
            baseUrl: 'https://example.com',
            route: '/post',
            body: { key: 'value' }
        };
        const response = await makeFetchRequest(params, 'POST');

        expect(response).toEqual({ success: true });
        expect(fetch).toHaveBeenCalledWith('https://example.com/post', {
            method: 'POST',
            headers: expect.anything(),
            body: JSON.stringify({ key: 'value' })
        });
    });

    it('handles PUT request correctly', async () => {
        fetch.mockResolvedValueOnce(new Response(JSON.stringify({ updated: true })));
        const params = {
            baseUrl: 'https://example.com',
            route: '/put',
            body: { key: 'newValue' }
        };
        const response = await makeFetchRequest(params, 'PUT');

        expect(response).toEqual({ updated: true });
        expect(fetch).toHaveBeenCalledWith('https://example.com/put', {
            method: 'PUT',
            headers: expect.anything(),
            body: JSON.stringify({ key: 'newValue' })
        });
    });

    it('handles DELETE request correctly', async () => {
        fetch.mockResolvedValueOnce(new Response(JSON.stringify({ deleted: true })));
        const params = { baseUrl: 'https://example.com', route: '/delete' };
        const response = await makeFetchRequest(params, 'DELETE');

        expect(response).toEqual({ deleted: true });
        expect(fetch).toHaveBeenCalledWith('https://example.com/delete', {
            method: 'DELETE',
            body: undefined, 
            headers: expect.anything()          
        });
    });

    it('handles network errors', async () => {
        fetch.mockRejectedValue(new Error('Network error'));
        const params = { baseUrl: 'https://example.com', route: '/error' };
        const response = await makeFetchRequest(params, 'GET');

        expect(response).toBe(false);
        expect(fetch).toHaveBeenCalledWith('https://example.com/error', expect.anything());
    });

    it('getService calls makeFetchRequest with GET method', async () => {
        const params = { baseUrl: 'https://example.com', route: '/test' };
        await getService(params);

        expect(fetch).toHaveBeenCalledWith('https://example.com/test', expect.objectContaining({ method: 'GET' }));
    });

    it('postService calls makeFetchRequest with POST method', async () => {
        const params = { baseUrl: 'https://example.com', route: '/post', body: { key: 'value' } };
        await postService(params);

        expect(fetch).toHaveBeenCalledWith('https://example.com/post', expect.objectContaining({
            method: 'POST',
            body: JSON.stringify({ key: 'value' })
        }));
    });

    it('putService calls makeFetchRequest with PUT method', async () => {
        const params = { baseUrl: 'https://example.com', route: '/put', body: { key: 'newValue' } };
        await putService(params);

        expect(fetch).toHaveBeenCalledWith('https://example.com/put', expect.objectContaining({
            method: 'PUT',
            body: JSON.stringify({ key: 'newValue' })
        }));
    });

    it('deleteService calls makeFetchRequest with DELETE method', async () => {
        const params = { baseUrl: 'https://example.com', route: '/delete' };
        await deleteService(params);

        expect(fetch).toHaveBeenCalledWith('https://example.com/delete', expect.objectContaining({ method: 'DELETE' }));
    });

    it('getService calls makeFetchRequest with GET method', async () => {
        const params = { baseUrl: 'https://example.com', route: '/health' };
        await checkGetRequest(params);

        expect(fetch).toHaveBeenCalledWith('https://example.com/health', expect.objectContaining({ method: 'GET' }));
    });
    
    it('handles non-ok HTTP response', async () => {
        // Mock do sessionStorage.getItem
        Object.defineProperty(window, 'sessionStorage', {
          value: {
            getItem: jest.fn().mockReturnValue('fake-token')
          },
          writable: true
        });
    
        // Mock do fetch para retornar um status de erro
        jest.spyOn(global, 'fetch').mockResolvedValue({
          ok: false,
          status: 500,
          json: () => Promise.resolve({ error: 'Server error' })
        });
    
        const params = {
          baseUrl: 'https://example.com',
          route: '/test',
          authToken: true
        };
    
        const response = await makeFetchRequest(params, 'GET');
    
        expect(response).toBe(false); // Espera que a resposta seja false devido ao response.ok ser false
        expect(global.fetch).toHaveBeenCalled();
    
        jest.restoreAllMocks();
      });
});

