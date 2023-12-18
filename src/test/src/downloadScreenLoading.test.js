import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DownloadScreenLoading from '../../components/layout/downloadScreenLoading';

describe('DownloadScreenLoading', () => {
  const mockT = jest.fn().mockImplementation((key) => key);

  it('deve exibir o carregador quando loading é verdadeiro', () => {
    render(<DownloadScreenLoading loading={true} t={mockT} />);
    // Verifique se o carregador foi renderizado
    expect(screen.getByLabelText('blocks-loading')).toBeInTheDocument();
  });

  it('deve exibir o resultado de aviso e botão de recarga quando loading é falso', () => {
    render(<DownloadScreenLoading loading={false} t={mockT} />);
    // Verifique se o resultado de aviso foi renderizado
    expect(screen.getByText('common.unavaible')).toBeInTheDocument();
    expect(screen.getByText('common.reload.page')).toBeInTheDocument();
  });

  it('deve chamar window.location.reload ao clicar no botão de recarga', () => {
    delete window.location;
    window.location = { reload: jest.fn() };
    render(<DownloadScreenLoading loading={false} t={mockT} />);
    // Clique no botão de recarga
    fireEvent.click(screen.getByText('common.reload.page'));
    expect(window.location.reload).toHaveBeenCalled();
  });

  it('deve exibir o botão de download quando downloadUrl é fornecido', () => {
    render(<DownloadScreenLoading loading={false} downloadUrl="http://download.com" t={mockT} />);
    // Verifique se o botão de download foi renderizado
    expect(screen.getByText('module.info.download')).toBeInTheDocument();
    // Verifique se o botão de download possui o atributo href correto
    const downloadButton = screen.getByText('module.download');
    expect(downloadButton.closest('a')).toHaveAttribute('href', 'http://download.com');
  });
  
});
