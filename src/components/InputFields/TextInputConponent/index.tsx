import { forwardRef, memo } from 'react';

import { InputType } from './types';

const PontInputComponent = forwardRef<HTMLInputElement, InputType>(
  (props, ref) => {
    const {
      name,
      id,
      onChange,
      onBlur,
      label = '',
      errorMessage = '',
      type = 'text',
      disabled = false,
      required = false,
      style = {},
    } = props;
    return (
      <>
        <div className="form-element input-container">
          <input
            className={errorMessage ? 'error' : ''}
            ref={ref}
            disabled={disabled}
            type={type}
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            placeholder={`${label} ${required ? '*' : ''}`}
            style={style}
          />
          {errorMessage && <p className={'errorText'}>{errorMessage}</p>}
        </div>
      </>
    );
  },
);

const PlainTextFieldComponent = memo(PontInputComponent);
export default PlainTextFieldComponent;
