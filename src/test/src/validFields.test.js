import { validFields } from './../../helpers/validFields'; // Atualize o caminho conforme necessário
import moment from 'moment';

describe('validFields', () => {
  // Teste para 'date'
  it('validates date correctly', () => {
    const validDate = '2021-01-01';
    expect(validFields(validDate, 'date')).toEqual(moment(validDate));

    const invalidDate = 'invalid-date';
    expect(validFields(invalidDate, 'date')).toBe(false);
  });

  // Teste para 'string'
  it('validates string correctly', () => {
    expect(validFields('test string', 'string')).toBe('test string');
    expect(validFields(123, 'string')).toBe(false);
  });

  // Teste para 'number'
  it('validates number correctly', () => {
    expect(validFields(123, 'number')).toBe(123);
    expect(validFields('not a number', 'number')).toBe(false);
  });

  // Teste para 'boolean'
  it('validates boolean correctly', () => {
    expect(validFields(true, 'boolean')).toBe(true);
    expect(validFields('not a boolean', 'boolean')).toBe(false);
  });

  // Teste para 'array'
  it('validates array correctly', () => {
    expect(validFields([1, 2, 3], 'array')).toEqual([1, 2, 3]);
    expect(validFields('not an array', 'array')).toBe(false);
  });

  // Teste para 'object'
  it('validates object correctly', () => {
    expect(validFields({ key: 'value' }, 'object')).toEqual({ key: 'value' });
    expect(validFields('not an object', 'object')).toBe(false);
  });

  // Teste para 'email'
  it('validates email correctly', () => {
    expect(validFields('test@example.com', 'email')).toBe('test@example.com');
    expect(validFields('invalidemail', 'email')).toBe(false);
  });

  // Teste para o caso padrão
  it('returns the value for unknown types', () => {
    const unknownTypeValue = 'unknown type value';
    expect(validFields(unknownTypeValue, 'unknown')).toBe(unknownTypeValue);
  });
});
