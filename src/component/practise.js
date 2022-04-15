import { Form, Field, FormSpy } from "react-final-form";
import createDecorator from "final-form-focus";

const iWillHandleOnSubmit = (e) => {
  alert(JSON.stringify(e));
};
const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);
const minValue = (min) => (value) =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const focusOnErrors = createDecorator();
export const Practise = () => {
  return (
    <>
      {" "}
      <Form onSubmit={iWillHandleOnSubmit} decorators={[focusOnErrors]}>
        {({ handleSubmit, form, values }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="first_name"
              component={"input"}
              placeholder={"John"}
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div
                  style={{
                    background: meta.active ? "beige" : null,
                    color: meta.visited ? "green" : null,
                  }}
                >
                  <label>First Name:</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="last_name"
              component={"input"}
              placeholder={"doe"}
              validate={required}
            >
              {({ input, meta, placeholder }) => (
                <div
                  style={{
                    background: meta.active ? "lightblue" : null,
                    color: meta.touched ? "red" : null,
                  }}
                >
                  <label>First Name:</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="age"
              placeholder="enter your age"
              component={"input"}
              validate={composeValidators(required, mustBeNumber, minValue(18))}
            >
              {({ input, meta, placeholder }) => (
                <div>
                  <label>Age</label>
                  <input {...input} placeholder={placeholder} />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <button type="submit">Submit</button>
            <FormSpy subscription={{ values: true }}>
              {({ values }) => <pre>{JSON.stringify(values)}</pre>}
            </FormSpy>
          </form>
        )}
      </Form>
    </>
  );
};
