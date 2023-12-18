export const selectComponentProps = {
    name: 'mySelect',
    value: 'option2',
    label: 'Select an option',
    onChange: jest.fn(),
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    className: 'custom-class',
  };