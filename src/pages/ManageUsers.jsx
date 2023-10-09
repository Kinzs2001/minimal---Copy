import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import BreadCrumb from "../Components/Common/BreadCrumb";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";
import List from "list.js";
import Flatpickr from "react-flatpickr";

import { useStateContext } from "../contexts/contextProvider";

const ManageUsers = () => {
  const { userData, addUserNote, deleteUserNote, editUserNote, getUserData } =
    useStateContext();
  //1
  const [modal_list, setmodal_list] = useState(false);
  const [datas, setdatas] = useState({
    id: "",
    user: "",
    email: "",
    phone: "",
    joinDate: "",
  });
  function tog_list() {
    setmodal_list(!modal_list);
  }

  const handleClick = (e) => {
    e.preventDefault();
    addUserNote(datas.id, datas.user, datas.email, datas.phone, datas.joinDate);
    setmodal_list();
  };

  const onChange = (e) => {
    setdatas({
      ...datas,
      [e.target.id]: e.target.value,
      [e.target.user]: e.target.value,
      [e.target.email]: e.target.value,
      [e.target.phone]: e.target.value,
      [e.target.joinDate]: e.target.value,
    });
  };

  //2
  const [modal_list1, setmodal_list1] = useState(false);
  const [datas1, setdatas1] = useState({
    id: "",
    euser: "",
    eemail: "",
    ephone: "",
    ejoinDate: "",
  });

  function tog_list1(currentData) {
    setmodal_list1(!modal_list1);
    setdatas1({
      id: currentData.id,
      euser: currentData.euser,
      eemail: currentData.eemail,
      ephone: currentData.ephone,
      ejoinDate: currentData.ejoinDate,
    });
  }

  const handleClick1 = (e) => {
    console.log(userData);
    editUserNote(
      userData.id,
      userData.user,
      userData.phone,
      userData.email,
      userData.joinDate
    );
    e.preventDefault();
    setmodal_list1();
  };

  const onChange1 = (e) => {
    setdatas1({ ...userData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <div className="table">
        <div className="page-content p-1 m-1 table-hover">
          <Container fluid>
            <BreadCrumb title="User" pageTitle="Dashboard" />
            <Row>
              <Col lg={12}>
                <Card>
                  <CardHeader>
                    <h4 className="card-title mb-0">Manage Users</h4>
                  </CardHeader>

                  <CardBody>
                    <div id="customerList">
                      <Row className="g-4 mb-3">
                        <Col className="col-sm">
                          <div className="d-flex ">
                            <div className="search-box ms-2">
                              <input
                                type="text"
                                className="form-control search"
                                placeholder="Type a keyword..."
                              />
                              <i className="ri-search-line search-icon"></i>
                            </div>
                          </div>
                        </Col>
                        <Col className="col-sm-auto">
                          <div>
                            <Button
                              color="primary"
                              className="add-btn me-1 bg-blue-400"
                              onClick={() => tog_list()}
                              id="create-btn"
                            >
                              <i className="ri-add-line align-bottom me-1"></i>{" "}
                              Add
                            </Button>
                          </div>
                        </Col>
                      </Row>

                      <div className="table-responsive table-card mt-3 mb-1">
                        <table
                          className="table align-middle table-nowrap table-hover"
                          id="customerTable"
                        >
                          <thead className="table-light">
                            <tr>
                              <th scope="col" style={{ width: "50px" }}>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkAll"
                                    value="option"
                                  />
                                </div>
                              </th>
                              <th className="sort" data-sort="customer_name">
                                Users
                              </th>
                              <th className="sort" data-sort="email">
                                Email
                              </th>
                              <th className="sort" data-sort="phone">
                                Phone
                              </th>
                              <th className="sort" data-sort="date">
                                Joining Date
                              </th>
                              <th className="sort" data-sort="status">
                                Action
                              </th>
                              <th className="sort" data-sort="action">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="list form-check-all">
                            {userData.map((element) => (
                              <tr key={element.id}>
                                <th scope="row">
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      name="checkAll"
                                      value="option1"
                                    />
                                  </div>
                                </th>
                                <td className="id" style={{ display: "none" }}>
                                  <Link
                                    to="#"
                                    className="fw-medium link-primary"
                                  >
                                    {element.id}
                                  </Link>
                                </td>
                                <td className="user">{element.user}</td>
                                <td className="email">{element.email}</td>
                                <td className="phone">{element.phone}</td>
                                <td className="joinDate">{element.joinDate}</td>
                                <td className="status">
                                  <span className="badge bg-success-subtle text-success text-uppercase">
                                    Active
                                  </span>
                                </td>
                                <td>
                                  <div className="d-flex gap-2">
                                    <div className="edit">
                                      <button
                                        className="btn btn-sm btn-primary edit-item-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#showModal"
                                        onClick={() => tog_list1(element)}
                                      >
                                        Edit
                                      </button>
                                    </div>
                                    <div className="remove">
                                      <button
                                        className="btn btn-sm btn-success remove-item-btn"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteRecordModal"
                                        onClick={() => {
                                          deleteUserNote(element.id);
                                        }}
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="noresult" style={{ display: "none" }}>
                          <div className="text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#25a0e2,secondary:#00bd9d"
                              style={{ width: "75px", height: "75px" }}
                            ></lord-icon>
                            <h5 className="mt-2">Sorry! No Result Found</h5>
                            <p className="text-muted mb-0">
                              We've searched more than 150+ Orders We did not
                              find any orders for you search.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end">
                        <div className="pagination-wrap hstack gap-2">
                          <Link
                            className="page-item pagination-prev disabled"
                            to="#"
                          >
                            Previous
                          </Link>
                          <ul className="pagination listjs-pagination mb-0"></ul>
                          <Link className="page-item pagination-next" to="#">
                            Next
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Add Modal */}
        <Modal
          isOpen={modal_list}
          toggle={() => {
            tog_list();
          }}
          centered
        >
          <ModalHeader
            className="bg-light p-3"
            toggle={() => {
              tog_list();
            }}
          >
            {" "}
            Add Customer{" "}
          </ModalHeader>
          <form className="tablelist-form">
            <ModalBody>
              <div className="mb-3" id="modal-id">
                <label htmlFor="id-field" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="form-control"
                  placeholder="Id"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="mb-3" id="modal-id">
                <label htmlFor="id-field" className="form-label">
                  User
                </label>
                <input
                  type="text"
                  id="user"
                  name="user"
                  className="form-control"
                  placeholder="user"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Category-field" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="email"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name-field" className="form-label">
                  Phone
                </label>
                <input
                  type="Name"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder="phone"
                  onChange={onChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image-field" className="form-label">
                  Join In Date
                </label>
                <input
                  type="text"

                  className="form-control"
                  placeholder="joinDate"
                  required
                />
                {/* <Flatpickr
                className="form-control"
                id="joinDate"
                name="joinDate"
                options={{
                dateFormat: "d M, Y"
                }}
                placeholder="Select Date"
                  onChange={onChange}
                /> */}
              </div>

              <div>
                <label htmlFor="status-field" className="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  data-trigger
                  name="status-field"
                  id="status-field"
                >
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="Block">Block</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="hstack gap-2 justify-content-end">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setmodal_list(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success bg-green-500"
                  id="add-btn"
                  onClick={handleClick}
                >
                  Submit
                </button>
                {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
              </div>
            </ModalFooter>
          </form>
        </Modal>

        {/* Add Modal 2 */}
        <Modal
          isOpen={modal_list1}
          toggle={() => {
            tog_list1();
          }}
          centered
        >
          <ModalHeader
            className="bg-light p-3"
            toggle={() => {
              tog_list1();
            }}
          >
            {" "}
            Add Customer{" "}
          </ModalHeader>
          <form className="tablelist-form">
            <ModalBody>
              <div className="mb-3" id="modal-id">
                <label htmlFor="id-field" className="form-label">
                  ID
                </label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  className="form-control"
                  placeholder="Id"
                  value={datas1.id}
                  onChange={onChange1}
                  required
                />
              </div>
              <div className="mb-3" id="modal-id">
                <label htmlFor="id-field" className="form-label">
                  User
                </label>
                <input
                  type="text"
                  id="euser"
                  name="euser"
                  className="form-control"
                  placeholder="user"
                  value={datas1.euser}
                  onChange={onChange1}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Category-field" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  id="eemail"
                  name="eemail"
                  className="form-control"
                  placeholder="email"
                  value={datas1.eemail}
                  onChange={onChange1}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="Name-field" className="form-label">
                  Phone
                </label>
                <input
                  type="Name"
                  id="ephone"
                  name="ephone"
                  className="form-control"
                  placeholder="phone"
                  value={datas1.ephone}
                  onChange={onChange1}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image-field" className="form-label">
                  Join In Date
                </label>
                <input
                  type="text"

                  className="form-control"
                  placeholder="joinDate"
                  onChange={onChange1}
                  required
                />
                {/* <Flatpickr
                className="form-control"
                id="ejoinDate"
                name="ejoinDate"
                options={{
                dateFormat: "d M, Y"
                }}
                value={datas1.ejoinDate}
                placeholder="Select Date"
                /> */}
              </div>
              <div>
                <label htmlFor="status-field" className="form-label">
                  Status
                </label>
                <select
                  className="form-control"
                  data-trigger
                  name="status-field"
                  id="status-field"
                >
                  <option value="">Status</option>
                  <option value="Active">Active</option>
                  <option value="Block">Block</option>
                </select>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className="hstack gap-2 justify-content-end">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => setmodal_list1(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success bg-green-500"
                  id="add-btn"
                  onClick={handleClick1}
                >
                  Update
                </button>
                {/* <button type="button" className="btn btn-success" id="edit-btn">Update</button> */}
              </div>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    </>
  );
};

export default ManageUsers;
