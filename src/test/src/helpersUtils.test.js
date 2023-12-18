import { validateCPF, validateCNPJ } from '../../helpers/utils';

describe('CPF and CNPJ Validation', () => {
  describe('validateCPF', () => {
    it('validates a correct CPF number', () => {
      expect(validateCPF('123.456.789-09')).toBeTruthy();
    });

    it('should return false for invalid first digit', () => {
      const invalidCPF = '12345678900';
      expect(validateCPF(invalidCPF)).toBe(false);
    });

    it('should return false for invalid second digit', () => {
      const invalidCPF = '12345678901';
      expect(validateCPF(invalidCPF)).toBe(false);
    });

    it('returns false for an incorrect CPF number', () => {
      expect(validateCPF('123.456.789-00')).toBeFalsy();
    });

    it('returns false for an invalid CPF format', () => {
      expect(validateCPF('123456')).toBeFalsy();
    });

    it('returns false for an empty string', () => {
      expect(validateCPF('')).toBeFalsy();
    });
  });

  describe('validateCNPJ', () => {

    it('should return false for invalid first digit', () => {
      const invalidCNPJ = '12345678000100';
      expect(validateCNPJ(invalidCNPJ)).toBe(false);
    });
  
    it('should return false for invalid second digit', () => {
      const invalidCNPJ = '12345678000101';
      expect(validateCNPJ(invalidCNPJ)).toBe(false);
    });

    it('validates a correct CNPJ number', () => {
      expect(validateCNPJ('28.692.253/0001-92')).toBeTruthy();
    });

    it('returns false for an incorrect CNPJ number', () => {
      expect(validateCNPJ('12.345.678/0001-00')).toBeFalsy();
    });

    it('returns false for an invalid CNPJ format', () => {
      expect(validateCNPJ('12345')).toBeFalsy();
    });

    it('returns false for an empty string', () => {
      expect(validateCNPJ('')).toBeFalsy();
    });
  });
});
