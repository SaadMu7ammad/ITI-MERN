import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form() {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  var formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

    onSubmit: function (values) {
      console.log(values);
    },
  });
  return (
    <form class="row g-3" onSubmit={formik.handleSubmit}>
      <div class="col-auto">
        <label for="staticEmail2" >
          Email
        </label>
        <div className="mail">
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
      </div>
      <div class="col-auto">
        <label for="inputPassword2" >
          Password
        </label>
        <div className="pass">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Confirm identity
        </button>
      </div>
    </form>
  );
}

export default Form;
