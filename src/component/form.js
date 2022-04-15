import { Form, Field } from "react-final-form";
import createDecorator from "final-form-focus";
import classes from "./form.module.css";
const focusOnErrors = createDecorator();
const onSubmit = (e) => {
  alert(JSON.stringify(e));
};
const required = (value) => (value ? undefined : "Required");
const req = (value) => (value?.length > 0 ? undefined : "Required");
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
// const activeField = (meta) => ({
//   background: meta.active ? "beige" : null,
// });

// background
export const FinalForm = () => {
  return (
    <Form onSubmit={onSubmit} decorators={[focusOnErrors]}>
      {({ handleSubmit, values, form }) => {
        return (
          <form onSubmit={handleSubmit}>
            <div className={classes.subDiv}>
              <label>First name:</label>
              <div>
                <Field
                  name="first_name"
                  placeholder="Enter your first name"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div
                      style={{
                        background: meta.active ? "beige" : null,
                      }}
                    >
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && (
                        <span>This field is required</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className={classes.subDiv}>
              <label>Last name:</label>
              <div>
                <Field
                  name="last_name"
                  placeholder="Enter your last name"
                  validate={required}
                >
                  {({ input, meta, placeholder }) => (
                    <div
                      style={{
                        background: meta.active ? "beige" : null,
                      }}
                    >
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && (
                        <span>This field is required</span>
                      )}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className={classes.subDiv}>
              <label>Age:</label>
              <div>
                <Field
                  name="age"
                  placeholder="Enter your age"
                  validate={composeValidators(
                    required,
                    mustBeNumber,
                    minValue(18)
                  )}
                >
                  {({ input, meta, placeholder }) => (
                    <div>
                      <input {...input} placeholder={placeholder} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className={classes.subDiv}>
              <label>Martial status:</label>
              <div>
                <Field
                  name="martial"
                  component="input"
                  type="radio"
                  value="married"
                  validate={required}
                />{" "}
                <label>Married</label>
                <Field
                  name="martial"
                  component="input"
                  type="radio"
                  value="single"
                  validate={required}
                />{" "}
                <label>Single </label>
                <Field
                  name="martial"
                  component="input"
                  type="radio"
                  value="divorce"
                  validate={required}
                />{" "}
                <label>Divorced</label>
                <Field
                  name="martial"
                  component="input"
                  type="radio"
                  value="widow"
                  validate={required}
                />{" "}
                <label>Widow</label>
              </div>
            </div>
            <div className={classes.subDiv}>
              <label>Designation:</label>
              <div>
                <Field
                  name="designation"
                  component={"select"}
                  validate={required}
                >
                  <option></option>
                  <option value={"student"}>Student</option>
                  <option value={"employed"}>Employed</option>
                  <option value={"unemployed"}>Unemployed</option>
                </Field>
              </div>
            </div>
            <div className={classes.subDiv}>
              <label>Tech-stack:</label>
              <div className={classes.subDiv}>
                <label>HTML</label>
                <Field
                  name="tech-stack"
                  component="input"
                  type="checkbox"
                  value="HTML"
                  validate={required}
                >
                  {({ meta, input }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <label>CSS </label>
                <Field
                  name="tech-stack"
                  component="input"
                  type="checkbox"
                  value="CSS"
                  validate={required}
                >
                  {({ meta, input }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <label>Javascript </label>
                <Field
                  name="tech-stack"
                  component="input"
                  type="checkbox"
                  value="Javascript"
                  validate={required}
                >
                  {({ meta, input }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <label>React </label>
                <Field
                  name="tech-stack"
                  component="input"
                  type="checkbox"
                  value="React"
                  validate={required}
                >
                  {({ meta, input }) => (
                    <div>
                      <input {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
            </div>

            <div className={classes.subDiv}>
              <label>Feedback</label>
              <div>
                <Field
                  name="feedback"
                  component="textarea"
                  placeholder="enter your feedback"
                  required={req}
                >
                  {({ input, meta, placeholder }) => (
                    <>
                      <input {...input} placeholder={placeholder} />
                    </>
                  )}
                </Field>
              </div>
            </div>
            <button type="submit">Submit</button>
            <pre>{JSON.stringify(values)}</pre>
          </form>
        );
      }}
    </Form>
  );
};
