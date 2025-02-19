import React from 'react';
import { render } from '@testing-library/react';
import { WarningPageScreenSize } from '../../components';

describe('WarningPageScreenSize', () => {
  it('renders correctly', () => {
    const { getByText } = render(<WarningPageScreenSize warningTitle={'warningPage.title'} warningSubTitle={'warningPage.subTitle'} />);

    // Check if the component renders the title and subtitle
    expect(getByText('warningPage.title')).toBeInTheDocument();
    expect(getByText('warningPage.subTitle')).toBeInTheDocument();
  });
});
