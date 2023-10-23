import React from 'react';
import { Result } from 'antd';
import { useTranslation } from 'react-i18next';

const WarningPageScreenSize: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Result
    className='centered-content'
    status="warning"
    title={t('warningPage.title')}
    subTitle={t('warningPage.subTitle')}
  />
  );
};

export default WarningPageScreenSize;
