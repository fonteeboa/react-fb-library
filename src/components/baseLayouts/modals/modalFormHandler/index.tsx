import Modal from 'react-modal';
import React, { useEffect } from "react";
import { Button } from '../../../baseComponents';
import { ModalProps } from '../types';
import { Form, Card, Divider, Space } from "antd";
import { renderfields } from '../../../../utils/renderField';
import { setCurrentItemValues, handleFormSubmit, setFieldValues as setFieldValuesService } from '../services/modalService';

export const ModalFormHandler: React.FC<ModalProps> = ({ closeModal, onSave, fields, contentLabel, currentItem, onCancelText, onSaveText }) => {
   const [form] = Form.useForm<any>();

   useEffect(() => {
      setCurrentItemValues(form, currentItem);
   }, [form, currentItem]);
  
   const handleSubmit = async (): Promise<void> => {
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
               <Button key="cancel" type="default" onClick={closeModal} className="btn btn-secondary" label={onCancelText ? onCancelText : "Cancel"} />
               <Button key="save" type="primary" onClick={handleSubmit} className="btn btn-primary" label={onSaveText ? onSaveText : "Save"} />
            </div>
        
         </Card>
      </Modal>
   );
};