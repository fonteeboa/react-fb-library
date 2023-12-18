import { setCurrentItemValues, handleFormSubmit, setFieldValues } from '../../components/baseLayouts/modals/services/modalService';
import { validFields } from '../../helpers/validFields';
import moment from 'moment';

jest.mock('../../helpers/validFields');

describe('setCurrentItemValues', () => {
  it('deve definir valores de campos no formulário', () => {
    const mockForm = { setFieldsValue: jest.fn() };
    const currentItem = { name: 'Test', age: 30 };
    validFields.mockImplementation((value) => value);

    setCurrentItemValues(mockForm, currentItem);

    expect(mockForm.setFieldsValue).toHaveBeenCalledWith({ name: 'Test' });
    expect(mockForm.setFieldsValue).toHaveBeenCalledWith({ age: 30 });
  });
});

describe('handleFormSubmit', () => {
  it('deve chamar onSave com valores validados', async () => {
    const mockForm = { validateFields: jest.fn().mockResolvedValue({ name: 'Test' }) };
    const mockOnSave = jest.fn();

    await handleFormSubmit(mockForm, mockOnSave);

    expect(mockOnSave).toHaveBeenCalledWith({ name: 'Test' });
  });

  it('deve capturar erros ao validar campos', async () => {
    const mockForm = { validateFields: jest.fn().mockRejectedValue(new Error('Erro de validação')) };
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    await handleFormSubmit(mockForm, jest.fn());

    expect(consoleSpy).toHaveBeenCalledWith("Erro ao validar campos do formulário:", expect.any(Error));

    consoleSpy.mockRestore();
  });
});

describe('setFieldValues', () => {
    it('deve definir o valor do campo data corretamente', () => {
      const mockForm = { setFieldsValue: jest.fn() };
      const mockEvent = moment();
  
      setFieldValues(mockForm, mockEvent, 'date');
  
      expect(mockForm.setFieldsValue).toHaveBeenCalledWith({ date: mockEvent.format("YYYY-MM-DD HH:mm") });
    });
  
    it('deve definir o valor do campo não-data corretamente', () => {
      const mockForm = { setFieldsValue: jest.fn() };
      const mockEvent = { target: { value: 'Test' } };
  
      setFieldValues(mockForm, mockEvent, 'name');
  
      expect(mockForm.setFieldsValue).toHaveBeenCalledWith({ name: 'Test' });
    });
});