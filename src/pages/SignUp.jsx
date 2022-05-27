import React from 'react'
import { Link } from 'react-router-dom'
// import formik from "formik";
import { Formik, Form, Field, useFormik } from 'formik';
import * as yup from "yup"


export default function SignUp() {
    const formik = useFormik({
        initialValues:
        {
            "name": "",
            "email": "",
            "password": "",
            "cpassword": ""
        },
        validationSchema: yup.object({
            name: yup
                .string().required("Enter your name"),
            email: yup
                .string().email("Enter a valid email").required("Email is Required"),
            password: yup
                .string().required("Enter password"),
            cpassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "password do not match")

        })
    })





    return (
        <div className="container">
            {
                JSON.stringify(formik.errors)
            }
            <div className="row">
                <div className="col-sm-6 offset-sm-3">
                    <div className="card">
                        <div className="card-header">Signup</div>
                        <div className="card-body">
                            <div>
                                <label for="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                    placeholder="Enter your name"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="email" className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    placeholder="Enter Your Email"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div className="mt-2">
                                <label for="password" className="form-label">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div className="mt-2">
                                <label for="cpassword" className="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cpassword"
                                    onChange={formik.handleChange}
                                    value={formik.values.cpassword}
                                    placeholder="Confirm Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p className="text-center mt-3">
                                Already Have Account? <Link to="/signin">Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
