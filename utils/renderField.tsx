import React from 'react';
import { SelectComponent, InputField } from '../components/baseComponents'; // Importe o componente Switch
import { FormInstance } from 'antd/lib/form';
import moment from 'moment';
import { Field } from '../components/baseLayouts/modals/types';
import { Form, Row, Col,DatePicker, Switch, Input } from 'antd';
import dayjs from 'dayjs';
import { customStyles } from '../components/baseLayouts/modals/constants/constants';


export const renderfields = (field: Field, index: number, form: FormInstance, setFieldValues: (value: any, fieldName: string) => void) => {
   if (field.required && !field.rules) {
      field.rules = ['required'];
   }

   if (field.doublelines) {
      return (
         <Row gutter={16}>
            {field.doublelines.map((field: Field, index2: number) => {
               return (
                  <Col span={12}>
                     <Form.Item
                        name={field.name}
                        key={field.name}
                        rules={field.rules ? field.rules : []}
                     >
                        {renderField(field, customStyles.inline, index2, form, setFieldValues)}
                     </Form.Item>
                  </Col>
               );
            })}
         </Row>
      );
   } else {
      return (
         <Form.Item name={field.name} key={field.name} rules={field.rules ? field.rules : []} style={field.type === 'hidden' ? { display: 'none' } : undefined }>
            {renderField(field, customStyles.inline, index, form, setFieldValues)}
         </Form.Item>
      );
   }
};

const renderField = (
   field: Field,
   styleField: any = {},
   index: number = 0,
   form: FormInstance,
   setFieldValues: (value: any, fieldName: string) => void
) => {
   switch (field.type) {
   case 'select':
      return (
         <SelectComponent
            style={styleField}
            data-testid={`dataTestId${field.name}`}
            name={field.name}
            label={field.label}
            onChange={(date: any) => setFieldValues(date, field.name)}
            key={index + field.name}
            renderOptions = {field.optionsFunction ? field.optionsFunction : undefined}
         />
      );
   case 'datePicker':
      return (
         <DatePicker
            key={index + field.name}
            style={styleField}
            data-testid={`dataTestId-${field.name}`}
            name={field.name}
            onChange={(date, dateString) => setFieldValues(dateString, field.name)}
            value={dayjs(form.getFieldValue(field.name) || moment())}
         />
      );
   case 'slider':
      return (
         <div style={{ display: "flex" }}>
            <Switch
               style={styleField}
               data-testid={`dataTestId${field.name}`}
               checked={form.getFieldValue(field.name)}
               onChange={(checked) => setFieldValues(checked, field.name)}
               key={index + field.name}
            />
            <p>{field.name}</p>
         </div>
      );
   case 'number': // Adicione o campo de entrada numérica
      return (
         <Input
            style={styleField}
            type="number"
            name={field.label}
            data-testid={'dataTestId' + field.name}
            placeholder={field.placeholder ? field.placeholder : ''}
            onChange={(e) => setFieldValues(e.target.value, field.name)}
            key={index + field.name}
         />
      );
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
            key={index + field.name}
         />
      )
   }
};
