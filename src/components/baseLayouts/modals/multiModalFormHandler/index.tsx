
import React, { useState } from 'react';
import { Modal, Button, Tabs, Card, Form } from 'antd';
import { renderfields } from '../../../../utils/renderField';
import { MultiModalProps, TabContent, FormData } from '../types';
const { TabPane } = Tabs;

export const MultiModalFormHandler: React.FC<MultiModalProps> = ({ dynamicModals = [], pageTitle, handleSaveData, closeModal, }) => {
   const [activeTab, setActiveTab] = useState('1');
   const [modalVisible, setModalVisible] = useState(false);
   const [form] = Form.useForm<FormData>();
   const handleTabChange = (key: string) => {
      setActiveTab(key);
   };

   const setFieldValues= (value: any, fieldName: string) => {
      console.error(value, fieldName);
   }

   const FormContent = (tabsContent: TabContent ) => {
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
                        {FormContent(tabsContent )}
                     </TabPane>
                  ))}
               </Tabs>
            </Form>          
         </Modal>
      </Card>
   );
};
