import { useFormik } from "formik";
import { SignupValidationShema } from "../utils/validation-scheme";
import "./signup.css";

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    validationSchema: SignupValidationShema,
    onSubmit: (values) => {
      console.log("Submitted values:", values);
    },
  });

  const { values, handleSubmit, handleChange, errors, touched } = formik;

  const inputClass = (fieldName: keyof typeof touched) =>
    touched[fieldName] && errors[fieldName] ? "error" : "";

  return (
    <div className="main-container">
      <div className="offer-section">
        <span>Try it free 7 days</span> {" "} then $20/mo. thereafter
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className={inputClass("firstName")}
            placeholder="firstName"
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName ? (
            <div className="error-msg">{errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <input
            className={inputClass("lastName")}
            placeholder="lastName"
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName ? (
            <div className="error-msg">{errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <input
            className={inputClass("email")}
            placeholder="email"
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && touched.email ? (
            <div className="error-msg">{errors.email}</div>
          ) : null}
        </div>
        <div>
          <input
            className={inputClass("password")}
            placeholder="password"
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && touched.password ? (
            <div className="error-msg">{errors.password}</div>
          ) : null}
        </div>
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <div className="footer">
          By clicking the button, you are agreeing to our{" "}
          <a href="#">Terms and Services</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
