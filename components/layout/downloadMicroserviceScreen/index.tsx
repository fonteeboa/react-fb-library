import React from 'react';
import { Result, Button } from 'antd';
import { useTranslation } from 'react-i18next';

interface DownloadMicroserviceScreenProps {
  microserviceName: string;
  downloadUrl: string;
}

const DownloadMicroserviceScreen: React.FC<DownloadMicroserviceScreenProps> = ({
  microserviceName,
  downloadUrl,
}) => {
  const { t } = useTranslation();

  const handleReload = () => {
    // Implemente a lógica para recarregar a página aqui
    window.location.reload();
  };

  return (
    <div className='centered-content'>
      <Result
        status="warning"
        title={t("common.unavaible")}
        subTitle={t("module.notfound", { moduleName: microserviceName })}
        extra={
          downloadUrl !== '' && (
          <>
          <p>{t('module.info.download')}</p>
            <Button type="primary" href={downloadUrl} target="_blank" rel="noopener noreferrer">
              {t('module.download')}
            </Button>
            <Button type="default" onClick={handleReload}>
              {t('common.reload.page')}
            </Button>
          </>
        )}  
      />
    </div>
  );
};

export default DownloadMicroserviceScreen;
