
import React, { useState } from 'react';
import { Modal, Button, Tabs, Card, Form } from 'antd';
import { FormInstance } from "antd/lib/form";
import { renderfields } from '../../../utils/renderField';
import { MultiModalFormHandlerProps, TabContent } from './types';
const { TabPane } = Tabs;

export const MultiModalFormHandler: React.FC<MultiModalFormHandlerProps> = ({ dynamicModals = [], pageTitle, handleSaveData, closeModal, }) => {
   const [activeTab, setActiveTab] = useState('1');
   const [modalVisible, setModalVisible] = useState(false);
   const [form] = Form.useForm<FormInstance<FormData>>();
   const handleTabChange = (key: string) => {
      setActiveTab(key);
   };

   const setFieldValues= (value: any, fieldName: string) => {
      console.log(value, fieldName);
   }

   const FormContent = (key: string, tabsContent: TabContent ) => {
      const fields = tabsContent.fields;
      return (<div> 
         {fields.map((field : any, index: any) => renderfields(field, index, form, setFieldValues))}
      </div>
      );
   };

   const handleOk = (form : any) => {
      handleSaveData(form.getFieldsValue());
   };

   return (
      <Card>
         <Button onClick={() => setModalVisible(true)}>Open Modal</Button>
         <Modal
            visible={modalVisible}
            onOk={() => handleOk(form)}
            onCancel={closeModal}
            title={pageTitle}
         >
            <Form
               key="complexFormForm"
               name="complexForm"
               className="complexForm"
               labelCol={{ span: 8 }}
               wrapperCol={{ span: 16 }}
               style={{ maxWidth: 800 }}
               form={form}
            >
               <Tabs activeKey={activeTab} onChange={handleTabChange} tabPosition="left">
                  {dynamicModals.map((tabsContent : TabContent, index: number) => (
                     <TabPane tab={tabsContent.name} key={String(index + 1)}>
                        {FormContent(String(index + 1), tabsContent )}
                     </TabPane>
                  ))}
               </Tabs>
            </Form>          
         </Modal>
      </Card>
   );
};

