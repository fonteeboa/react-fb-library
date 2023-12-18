import React from 'react';
import { SelectComponent, InputField } from '../components/baseComponents';
import { FormInstance } from 'antd/lib/form';
import moment from 'moment';
import { Field } from '../components/baseLayouts/modals/types';
import { Form, Row, Col,DatePicker, Switch, Input } from 'antd';
import dayjs from 'dayjs';
import { customStyles } from '../components/baseLayouts/modals/constants/constants';
/**
 * Renders a field based on its type.
 *
 * @param {Field} field - The field object to render.
 * @param {any} styleField - Optional styling for the field.
 * @param {number} index - The index of the field.
 * @param {FormInstance} form - The form instance.
 * @param {(value: any, fieldName: string) => void} setFieldValues - Function to set field values.
 * @return {*} The rendered field component.
 */
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
   case 'number':
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
/**
 * Renders the fields based on the provided parameters.
 *
 * @param {Field} field - The field object to render.
 * @param {number} index - The index of the field.
 * @param {FormInstance} form - The instance of the form.
 * @param {(value: any, fieldName: string) => void} setFieldValues - The function to set field values.
 * @return {JSX.Element} The rendered fields.
 */
export const renderfields = (field: Field, index: number, form: FormInstance, setFieldValues: (value: any, fieldName: string) => void) => {
   if (field.required && !field.rules) {
      field.rules = ['required'];
   }
   if (field.doublelines) {
      return (
         <Row gutter={16}>
            {field.doublelines.map((field: Field, index2: number) => {
               return (
                  <Col span={12} key={index2}>
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