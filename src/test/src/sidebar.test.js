import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from '../../components/layout/sidebar';
import { faHome } from '@fortawesome/free-solid-svg-icons';
// Mock para FontAwesomeIcon
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <i className="fa-icon-mock"></i>
}));

describe('Sidebar', () => {
  it('deve renderizar itens do menu', () => {
    const menuItems = [
      {
        label: 'common.overview',
        icon: 'faHome',
        subMenu: [
          { label: 'common.dashboard', linkComponent: <div to="/">'common.dashboard'</div>, route: '/', icon: false },
        ],
      },
      {
        label: 'common.icon',
        icon: faHome,
        subMenu: [
          { label: 'common.dashboard', icon: false },
        ],
      },
      {
        label: 'common.home',
        icon: 'faHome',
      },
      {
        label: 'common.settings',
        icon: 'faGear',
        subMenu: [
          { label: 'common.apis', linkComponent: <div to="/apiSettings">'common.apis'</div>, route: '/apiSettings', icon: false },
        ],
      },
      {
        label: 'common.socialmedias',
        icon: 'faShareNodes',
        subMenu: [
          { 
            label: 'author.jv',
            icon: false, 
            external: true, 
            subMenu: [
              { label: 'common.github', route: 'https://github.com/username', icon: false, external: true },
              { label: 'common.linkedin', route: 'https://www.linkedin.com/in/usename', icon: false, external: true },
            ]
          },
        ],
      },
    ];

    const { getByText } = render(<Sidebar menuItems={menuItems} />);

    // Verifica se os labels dos itens do menu estão sendo exibidos
    expect(getByText('common.overview')).toBeInTheDocument();
    expect(getByText('common.settings')).toBeInTheDocument();
    expect(getByText('common.socialmedias')).toBeInTheDocument();
    expect(getByText('common.home')).toBeInTheDocument();
    expect(getByText('common.icon')).toBeInTheDocument();
  });
});
