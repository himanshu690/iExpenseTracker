import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function AddCategory() {
  const validationSchema = Yup.object({
    categoryType: Yup.string().required('Please select a category type'),
    categoryName: Yup.string()
      .required('Please enter a category name')
      .min(3, 'Type must be at least 3 characters'),
  });

  const formik = useFormik({
    initialValues: {
      categoryType: '',
      categoryName: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Add API call or dispatch action here
    },
  });

  return (
    <div>
      <form className="m-3" onSubmit={formik.handleSubmit}>
        <fieldset>
          <legend>Add Category</legend>

          <div className="mb-3">
            <label htmlFor="categoryType" className="form-label">
              Category: Expense or Income
            </label>
            <select
              id="categoryType"
              name="categoryType"
              className={`form-select ${formik.touched.categoryType && formik.errors.categoryType ? 'is-invalid' : ''}`}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryType}
            >
              <option value="">Select</option>
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
            {formik.touched.categoryType && formik.errors.categoryType && (
              <div className="invalid-feedback">{formik.errors.categoryType}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="categoryName" className="form-label">
              Type
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              className={`form-control ${formik.touched.categoryName && formik.errors.categoryName ? 'is-invalid' : ''}`}
              placeholder="Type"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryName}
            />
            {formik.touched.categoryName && formik.errors.categoryName && (
              <div className="invalid-feedback">{formik.errors.categoryName}</div>
            )}
          </div>

          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
