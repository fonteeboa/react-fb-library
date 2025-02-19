import React from 'react';
import { Result } from 'antd';
import { WarningPageScreenSizeProps } from './types';

/**
 * Renders the WarningPageScreenSize component.
 *
 * @param {WarningPageScreenSizeProps} props - The props for the component.
 * @return {React.ReactNode} The rendered component.
 */
const WarningPageScreenSize: React.FC<WarningPageScreenSizeProps> = ({ warningTitle, warningSubTitle }) => {
  return (
    <Result
      className="centered-content"
      status="warning"
      title={warningTitle || "Screen Too Small"}
      subTitle={warningSubTitle || "Sorry, this page is not available on screens smaller than 600px."}
    />
  );
};

export default WarningPageScreenSize;
