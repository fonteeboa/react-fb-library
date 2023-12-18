// Mock das colunas e dados de exemplo
export const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Idade',
      dataIndex: 'age',
      key: 'age',
    },
  ];
  
export const dataSource = [
    {
      key: '1',
      name: 'Alice',
      age: 30,
    },
    {
      key: '2',
      name: 'Bob',
      age: 25,
    },
  ];
  
export const bulkAction = [
    {
      label: 'Excluir Selecionados',
      action: jest.fn(), // Mock da ação em lote
    },
];