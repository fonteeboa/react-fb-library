import moment from 'moment';

/**
 * Validates the given value based on the specified type.
 *
 * @param {any} value - The value to be validated.
 * @param {string} type - The type of validation to be performed.
 * @return {any} - The validated value or false if validation fails.
 */
export const validFields = (value: any, type: string): any => {
  switch (type) {
    case 'date':
    case 'scheduled':
      return moment(value).isValid() ? moment(value) : false;
    case 'string':
      return typeof value === 'string' ? value : false;
    case 'number':
      return !isNaN(value) ? Number(value) : false;
    case 'boolean':
      return typeof value === 'boolean' ? value : false;
    case 'array':
      return Array.isArray(value) ? value : false;
    case 'object':
      return typeof value === 'object' && value !== null ? value : false;
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? value : false;
    default:
      return value;
  }
};

/**
 * Validates a CPF (Cadastro de Pessoas Físicas) number.
 *
 * @param {string} cpf - The CPF number to be validated.
 * @return {boolean} - True if the CPF number is valid, false otherwise.
 */
export function validateCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  // Verificação do primeiro dígito
  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i), 10) * (10 - i);
  }
  let remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(9), 10)) {
    return false;
  }

  // Verificação do segundo dígito
  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i), 10) * (11 - i);
  }
  remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cpf.charAt(10), 10)) {
    return false;
  }

  return true;
}

/**
 * Validates a CNPJ (Cadastro Nacional de Pessoa Jurídica) number.
 *
 * @param {string} cnpj - The CNPJ number to be validated.
 * @return {boolean} - True if the CNPJ is valid, false otherwise.
 */
export function validateCNPJ(cnpj: string): boolean {
  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  // Verificação do primeiro dígito
  let sum = 0;
  let multiplier = 5;

  for (let i = 0; i < 12; i++) {
    sum += parseInt(cnpj.charAt(i), 10) * multiplier;
    multiplier = multiplier === 2 ? 9 : multiplier - 1;
  }

  let remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cnpj.charAt(12), 10)) {
    return false;
  }

  // Verificação do segundo dígito
  sum = 0;
  multiplier = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(cnpj.charAt(i), 10) * multiplier;
    multiplier = multiplier === 2 ? 9 : multiplier - 1;
  }
  remainder = 11 - (sum % 11);

  if (remainder === 10 || remainder === 11) {
    remainder = 0;
  }

  if (remainder !== parseInt(cnpj.charAt(13), 10)) {
    return false;
  }
  return true;
}
