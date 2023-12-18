const spyMockResponse =((url, options) => {
    const method = options?.method || 'GET';

    switch (method) {
        case 'GET':
            return Promise.resolve({
                json: () => Promise.resolve({ data: 'test' }),
            });

        case 'POST':
            return Promise.resolve({
                json: () => Promise.resolve({ success: true }),
            });

        case 'PUT':
            return Promise.resolve({
                json: () => Promise.resolve({ updated: true }),
            });

        case 'DELETE':
            return Promise.resolve({
                json: () => Promise.resolve({ deleted: true }),
            });

        default:
            return Promise.reject(new Error('Method not mocked'));
    }
});

export default spyMockResponse;