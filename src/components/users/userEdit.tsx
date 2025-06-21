'use client';
import { User } from '@/lib/usersContext';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function UserEdit({
  user,
  onSubmit,
}: {
  user: User;
  onSubmit: (user: User) => void;
}) {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(
          t('userEditNameRequired', {
            defaultValue: 'Name is required',
          }),
        )
        .min(
          2,
          t('userEditNameMin', {
            defaultValue: 'Name must be at least 2 characters',
          }),
        ),
      email: Yup.string().required(
        t('userEditEmailRequired', {
          defaultValue: 'Email is required',
        }),
      ),
    }),
    onSubmit: (values) => {
      const editedUser: User = {
        ...user!,
        name: values.name,
        email: values.email,
        role: values.role,
      };
      onSubmit(editedUser);
    },
    validateOnChange: false,
    validateOnBlur: true,
  });

  return (
    <div className="w-full items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        {t('userEditTitle', {
          defaultValue: 'Edit User',
        })}
      </h1>
      <form className="w-full max-w-md" onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            {t('userEditNameLabel', {
              defaultValue: 'Name',
            })}
          </label>
          <input
            type="text"
            id="name"
            className="input input-bordered w-full"
            placeholder={t('userEditNamePlaceholder', {
              defaultValue: 'Enter your name',
            })}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && (
            <div className="text-error text-sm mt-1">{formik.errors.name}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            {t('userEditEmailLabel', {
              defaultValue: 'Email',
            })}
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered w-full"
            placeholder={t('userEditEmailPlaceholder', {
              defaultValue: 'Enter your email',
            })}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && (
            <div className="text-error text-sm mt-1">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="role">
            {t('userEditRoleLabel', {
              defaultValue: 'Role',
            })}
          </label>
          <select
            id="role"
            className="select select-bordered w-full"
            value={formik.values.role}
            onChange={(e) => formik.setFieldValue('role', e.target.value)}
            onBlur={formik.handleBlur}
          >
            <option value="user">
              {t('userEditRoleUser', { defaultValue: 'User' })}
            </option>
            <option value="admin">
              {t('userEditRoleAdmin', { defaultValue: 'Admin' })}
            </option>
            <option value="host">
              {t('userEditRoleHost', { defaultValue: 'Host' })}
            </option>
          </select>
          {formik.errors.role && (
            <div className="text-error text-sm mt-1">{formik.errors.role}</div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-primary w-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          {t('userEditSaveButton', {
            defaultValue: 'Save Changes',
          })}
        </button>
      </form>
    </div>
  );
}
