import Modal from 'react-modal';
import React, { useEffect } from "react";
import { FormInstance } from "antd/lib/form";
import { Button } from '../../base-components';
import { useTranslation } from 'react-i18next';
import { ModalProps,  FormData } from './types';
import { Form, Card, Divider, Space } from "antd";
import { renderfields } from './services/renderField';
import { setCurrentItemValues, handleFormSubmit, setFieldValues as setFieldValuesService } from './services/modalService';

export const CustomModal: React.FC<ModalProps> = ({ closeModal, onSave, fields, contentLabel, currentItem }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormInstance<FormData>>();

  useEffect(() => {
    setCurrentItemValues(form, currentItem);
  }, [form, currentItem]);
  
  const handleSubmit = async (e: any): Promise<void> => {
    handleFormSubmit(form, onSave);
  };
  
  const setFieldValues = (e: any, fieldName: string): void => {
    setFieldValuesService(form, e, fieldName);
  };

  return (
    <Modal
      className="customModal"
      isOpen={true}
      onRequestClose={closeModal}
      footer={null}
      key="complexFormModal"
    >
      <Card 
        key="complexFormCard"
        title={contentLabel}
      >
        <Space align="center" key="complexFormSpace">
          <Form
          key="complexFormForm"
          name="complexForm"
          className="complexForm"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          form={form}
          onFinish={handleSubmit}
          >
            {fields.map((field, index) => renderfields(field, index, form, setFieldValues))}
          </Form>
        </Space>
  
        <Divider key="complexFormDivider"/>

        <div className="modalFooter">
          <Button key="cancel" type="default" onClick={closeModal} className="btn btn-secondary" label={t("common.cancel")} />
          <Button key="save" type="primary" onClick={handleSubmit} className="btn btn-primary" label={t("common.save")} />
        </div>
        
      </Card>
    </Modal>
  );
};