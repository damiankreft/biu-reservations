import { useState } from 'react';

export function useFormInput(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: any) {
    setValue(e.target.value);
  }

  const inputProps = {
    className: 'input input-bordered w-full',
    type: 'text',
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}
