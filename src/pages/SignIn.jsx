import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import * as yup from "yup"

export default function SignIn() {
    const formik = useFormik({
        initialValues:
        {
            "email": "",
            "password": "",
        },
        validationSchema: yup.object({

            email: yup
                .string().email("Enter a valid email").required("Email is Required"),
            password: yup
                .string().required("Enter password"),
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
                        <div className="card-header">Login</div>
                        <div className="card-body">
                            <div>
                                <label for="email" className="form-label">First Email</label>
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
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                    placeholder="Enter Your Password"
                                />
                                <div className="valid-feedback">Looks good!</div>
                                <div className="invalid-feedback">Please choose a username.</div>
                            </div>
                            <button type="button" className="btn btn-primary w-100 mt-3">
                                Login
                            </button>
                            <p className="text-center mt-3">
                                Dont Have Account? <Link to="/signup">Create Account</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
