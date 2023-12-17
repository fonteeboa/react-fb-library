import React from 'react';
import { render } from '@testing-library/react';
import { WarningPageScreenSize } from '../../components';

// Mock the useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn().mockImplementation((key) => key),
  }),
}));

describe('WarningPageScreenSize', () => {
  it('renders correctly', () => {
    const { getByText } = render(<WarningPageScreenSize />);

    // Check if the component renders the title and subtitle
    expect(getByText('warningPage.title')).toBeInTheDocument();
    expect(getByText('warningPage.subTitle')).toBeInTheDocument();
  });
});
