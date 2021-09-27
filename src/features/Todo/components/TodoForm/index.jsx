import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-control/InputField/index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


TodoForm.propTypes = {
  onSubmit: PropTypes.func
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('nahp abc'),
    name: yup.string().required('nahp abc'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
      name: ''
    },
    resolver: yupResolver(schema),
  })
  const handleSubmit = (values) => {
    console.log('todoooo form', values)
  }

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        TodoForm
        <InputField label='nhap tieu de' form={form} name='title' />
        {/* <InputField label='nhap ten' form={form} name='name' /> */}
      </form>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        TodoForm
        {/* <InputField label='nhap tieu de' form={form} name='title' /> */}
        <InputField label='nhap ten' form={form} name='name' />
      </form>
    </div>
  );
}

export default TodoForm;