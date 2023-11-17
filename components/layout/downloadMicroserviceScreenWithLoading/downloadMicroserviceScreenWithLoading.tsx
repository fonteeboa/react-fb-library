import React from 'react';
import { Result, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { DownloadMicroserviceScreenWithLoadingProps } from './types';
import { Blocks } from "react-loader-spinner";
/**
 * Reloads the current page.
 *
 * @param {none} none - no parameters required
 * @return {void} no return value
 */
const DownloadMicroserviceScreenWithLoading: React.FC<DownloadMicroserviceScreenWithLoadingProps> = ({
   microserviceName,
   downloadUrl,
   loading
}) => {
   const { t } = useTranslation();

   /**
   * Reloads the current page.
   *
   * @param {none} none - no parameters required
   * @return {void} no return value
   */
   const handleReload = () => {
      window.location.reload();
   };

   return (
      <div className='centered-content'>
         { loading ? 
            <Blocks
               visible={true}
               height="80"
               width="80"
               ariaLabel="blocks-loading"
               wrapperStyle={{}}
               wrapperClass="blocks-wrapper"
            />
            :
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
         }
      </div>
   );
};

export default DownloadMicroserviceScreenWithLoading;
