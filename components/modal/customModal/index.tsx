import Modal from 'react-modal';
import React, { useEffect } from "react";
import { FormInstance } from "antd/lib/form";
import { useTranslation } from 'react-i18next';
import { Form, DatePicker, Card, Divider, Space, Row, Col } from "antd";
import { InputField, Button, SelectComponent } from '../../base-components';
import moment from 'moment';
import { validFields } from '../../../helpers/utils';
import { ModalProps, Field, FormData } from './modalType';

const customStyles = {
  doublelines: {
    display: 'flex',
    width: '150%',
    margin: '0 1%', // Espaço de 1% nas laterais
    minWidth: '200px',
  },
  inline: {
    display: 'inline-block',
    width: '150%',
    margin: '0',
    minWidth: '200px',
  },
};

export const CustomModal: React.FC<ModalProps> = ({ closeModal, onSave, fields, contentLabel, currentItem }) => {
  const { t } = useTranslation();
  const [form] = Form.useForm<FormInstance<FormData>>();

  useEffect(() => {
    const setCurrentItemValues = () => {
      if (typeof currentItem === 'object' && currentItem !== null) {
        Object.keys(currentItem).forEach((key) => {
          form.setFieldsValue({ [key]: validFields(currentItem[key], key) });
        })
      }
    }
    
    setCurrentItemValues();
  }, [form, currentItem]);


  const handleSubmit = async (e: any) => {
    try {
      const values: FormInstance<FormData> = await form.validateFields();
      onSave(values);
    } catch (error) {
      console.error("Erro ao validar campos do formulário:", error);
    }
  };

  const setFieldValues = (e: any, fieldName: string) => {
    let value = fieldName === 'date' ? moment(e).format("YYYY-MM-DD HH:mm") : e.target.value;
    if (value !== undefined) {
      form.setFieldsValue({ [fieldName]: value });
    }
  };

  const renderfields = (field: Field) => {
    if (field.required && !field.rules) {
      field.rules = ['required'];
    }
  
    if (field.doublelines) {
      return (
        <Row gutter={16}>
          {field.doublelines.map((field, index) => {
            return (
              <Col span={12}>
                <Form.Item
                  name={field.name}
                  key={field.name}
                  rules={field.rules ? field.rules : []}
                >
                  {identifyField(field, customStyles.doublelines, index)}
                </Form.Item>
              </Col>
            );
          })}
        </Row>
      );
    } else {
      return (
        <Form.Item name={field.name} key={field.name} rules={field.rules ? field.rules : []} style={field.type === 'hidden' ? { display: 'none' } : undefined }>
          {identifyField(field, customStyles.inline)}
        </Form.Item>
      );
    }
  };

  const identifyField = (field: Field, styleField: any = {}, index: number = 0)=> {
    switch(field.type){
      case 'select':
        return (
          <SelectComponent
            style={styleField}
            data-testid={"dataTestId" + field.name}
            name={field.name}
            label={field.label}
              onChange={(date: any) => setFieldValues(date, field.name)} // <- Passar o nome do campo aqui
          >
            {field.optionsFunction ? field.optionsFunction() : false}
          </SelectComponent>
        )
      case 'datePicker':
        return (
          <div style={styleField}>
            <label className="" htmlFor={field.name}><span>{field.label}</span></label>
            <DatePicker
              className=''
              name={field.name}
              onChange={(date: any) => setFieldValues(date, field.name)} // <- Passar o nome do campo aqui
              data-testid={'dataTestId-' + field.name}
              value={validFields(( form.getFieldValue(field.name) || moment() ), field.name)}
            />
          </div>
        )
      default:
        return (
          <InputField
            styles={styleField}
            type={field.type ? field.type : 'text'}
            name={field.name}
            label={field.label}
            data-testid={"dataTestId" + field.name}
            placeholder={field.placeholder ? field.placeholder : ''}
            onChange={(date: any ) => setFieldValues(date, field.name)}
            key={index} // Defina uma chave única
          />
        )
    }
  }

  return (
<Modal
  className="customModal"
  isOpen={true}
  onRequestClose={closeModal}
  footer={null}
>
  <Card 
    title={contentLabel}
  >
    <Space align="center">

      <Form
      name="complexForm"
      className="complexForm"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      form={form}
      onFinish={handleSubmit}
        
      >
        {fields.map((field) => renderfields(field))}
      </Form>

    </Space>
    
    <Divider />

    <div className="modalFooter">
        <Button key="cancel" type="default" onClick={closeModal} className="btn btn-secondary" label={t("common.cancel")} />
        <Button key="save" type="primary" onClick={handleSubmit} className="btn btn-primary" label={t("common.save")} />
      </div>
    
  </Card>
</Modal>


  );
};