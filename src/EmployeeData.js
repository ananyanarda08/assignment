import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { employeeData } from './employee_json ';

const EmployeeData = () => {
  const [submittedData, setSubmittedData] = useState([]); 
  const initialValues = employeeData[0].fields.reduce((values, field) => {
    if (field.type !== 'button') {
      values[field.id] = '';
    }
    return values;
  }, {});

  const validationSchemaFields = employeeData[0].fields.reduce((schema, field) => {
    if (field.validation && field.type !== 'date') {  
      let fieldSchema;

      if (field.type === 'text' || field.type === 'password') {
        fieldSchema = Yup.string();
      } else if (field.type === 'select') {
        fieldSchema = Yup.string();
      }

      field.validation.forEach((rule) => {
        if (rule.type === 'required') {
          fieldSchema = fieldSchema.required(rule.message);
        }
        if (rule.type === 'maxLength') {
          fieldSchema = fieldSchema.max(Number(rule.value), rule.message);
        }
        if (rule.type === 'oneOf') {
          fieldSchema = fieldSchema.oneOf([Yup.ref(rule.fieldToMatch)], rule.message);
        }
      });

      schema[field.id] = fieldSchema;
    }
    return schema;
  }, {});

  const validationSchema = Yup.object().shape(validationSchemaFields);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmittedData([...submittedData, values]);
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        {employeeData[0].fields.map((field) =>
          field.type !== 'button' ? (
            <div key={field.id} style={{ margin: '10px 0' }}>
              <label htmlFor={field.id}>{field.label}</label>
              {field.type === 'text' || field.type === 'password' ? (
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  {...formik.getFieldProps(field.id)}
                />
              ) : field.type === 'select' ? (
                <select id={field.id} {...formik.getFieldProps(field.id)}>
                  <option value="">Select {field.label}</option>
                  {field.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : field.type === 'date' ? (
                <input
                  id={field.id}
                  type="date"
                  placeholder={field.placeholder}
                  {...formik.getFieldProps(field.id)}
                />
              ) : null}
              {formik.touched[field.id] && formik.errors[field.id] ? (
                <div style={{ color: 'red' }}>{formik.errors[field.id]}</div>
              ) : null}
            </div>
          ) : null
        )}
        {employeeData[0].fields.map(
          (field) =>
            field.type === 'button' && (
              <button key={field.id} type="submit">
                {field.label}
              </button>
            )
        )}
      </form>

      <h2>Submitted Data</h2>
      {submittedData.length > 0 && (
        <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              {employeeData[0].fields
                .filter((field) => field.type !== 'button')
                .map((field) => (
                  <th key={field.id}>{field.label}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                {employeeData[0].fields
                  .filter((field) => field.type !== 'button')
                  .map((field) => (
                    <td key={field.id}>{data[field.id] || 'N/A'}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeData;
