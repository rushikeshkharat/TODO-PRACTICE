import { useFormik } from 'formik'
import React from 'react'
import * as yup from "yup"

export default function Todo() {
    const formik = useFormik({
        initialValues:
        {
            "task": "",
            "desc": "",
            "priority": "",
            "mtask": "",
            "mdesc": "",
            "mpriority": "",

        },
        validationSchema: yup.object({

            task: yup
                .string().required("Enter the title for task"),
            desc: yup
                .string().required("Enter the description"),
            priority: yup
                .string().required("Choose the priority"),
            mtask: yup
                .string().required("Enter new title for task"),
            mdesc: yup
                .string().required("Enter new description"),
            mpriority: yup
                .string().required("Choose the priority"),
        })
    })
    return (
        <div>
            <div className="container">
                {
                    JSON.stringify(formik.errors)
                }
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="card">
                            <div className="card-header">Todo</div>

                            <div className="card-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <label for="task" className="form-label">First task</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="task"
                                            onChange={formik.handleChange}
                                            value={formik.values.task}
                                            placeholder="Enter Your task"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add task.</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="desc" className="form-label">Description</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="desc"
                                            onChange={formik.handleChange}
                                            value={formik.values.desc}
                                            placeholder="Enter task description"
                                        />
                                        <div className="valid-feedback">Looks good!</div>
                                        <div className="invalid-feedback">Please add description</div>
                                    </div>
                                    <div className="mt-2">
                                        <label for="priority"> Priority</label>
                                        <select className="form-select" id="priority"
                                            onChange={formik.handleChange}
                                            value={formik.values.priority}>
                                            <option selected>Select Priority</option>
                                            <option value="high">High</option>
                                            <option value="medium">Medium</option>
                                            <option value="low">Low</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 mt-3">
                                        Add Todo
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-4">
                            <div
                                className="card-header d-flex justify-content-between"
                                data-bs-toggle="collapse"
                                data-bs-target="#task1"
                            >
                                task 1
                                <div>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-warning"
                                        data-bs-target="#editModal"
                                        data-bs-toggle="modal"
                                    >
                                        edit
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-sm btn-danger"
                                        data-bs-target="#deleteModal"
                                        data-bs-toggle="modal"
                                    >
                                        delete
                                    </button>
                                </div>
                            </div>
                            <div className="collapse" id="task1">
                                <div className="card-body">task 1 description</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="editModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModal">Edit Todo</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            {
                                JSON.stringify(formik.errors)
                            }
                            <form onSubmit={formik.handleSubmit}>
                                <div>
                                    <label for="mtask" className="form-label">First task</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mtask"
                                        onChange={formik.handleChange}
                                        value={formik.values.mtask}
                                        placeholder="Enter Your task"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add task.</div>
                                </div>
                                <div className="mt-2">
                                    <label for="mdesc" className="form-label">Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="mdesc"
                                        onChange={formik.handleChange}
                                        value={formik.values.mdesc}
                                        placeholder="Enter task description"
                                    />
                                    <div className="valid-feedback">Looks good!</div>
                                    <div className="invalid-feedback">Please add description</div>
                                </div>
                                <div className="mt-2">
                                    <label for="mpriority"> Priority</label>
                                    <select className="form-select"
                                        id="mpriority"
                                        onChange={formik.handleChange}
                                        value={formik.values.desc}
                                    >
                                        <option selected>Select Priority</option>
                                        <option value="high">High</option>
                                        <option value="medium">Medium</option>
                                        <option value="low">Low</option>
                                    </select>
                                </div>
                            </form>
                            <button type="submit" className="btn btn-primary w-100 mt-3"
                            >
                                Update Todo
                            </button>
                            <button
                                type="button"
                                className="btn mt-2 w-100 btn-outline-secondary"
                                data-bs-dismiss="modal"

                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="deleteModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-danger">
                                Are you sure you want delete this todo ?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body text-danger">
                            <p className="text-center text-muted mb-5">
                                You can delete this todo at any time. If you change your mind, you
                                might not be able to recover it
                            </p>
                            <div className="btn-group w-100">
                                <button type="button" className="btn btn-outline-danger">Yes</button>
                                <button type="button" className="btn btn-success">NO</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
