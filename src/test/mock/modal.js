export const mockFieldsDoubleLines = [
    { label: 'ID', name: 'ID', type: 'hidden' },
    { name: "doublelines",
        doublelines: [
            { label: 'common.name', name: 'name' },
            { label: 'common.key', name: 'key' },
        ]
    },
];

export const mockFields = [
    { label: 'common.name2', name: 'Name2' },
];

export const mockCloseModal = jest.fn();

export const mockOnSave = jest.fn();
  
export const tableContentsData = [
    {
        fields: mockFieldsDoubleLines,
        contentLabel: 'Tab 1 Content',
        name: 'Tab 1',
    },
    {
        fields: mockFields,
        contentLabel: 'Tab 2 Content',
        name: 'Tab 2',
    },
    // Pode adicionar mais elementos de acordo com a estrutura definida
];
