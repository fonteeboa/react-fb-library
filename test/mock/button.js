export const onClickMock = jest.fn();

export const buttonProps = {
  label: 'Click me',
  type: 'primary',
  size: 'large',
  styles: 'custom-style',
  onClick: onClickMock,
  className: 'custom-class',
};
