export const mockActions = [
    { name: 'Action 1', handler: jest.fn(), activeAction: true },
    { name: 'Dangerous Action', handler: jest.fn(), type: 'danger', confirmMessage: 'Are you sure?', activeAction: true }
  ];