import React from "react";

const ManageCategory = () => {
  return (
    <>
      <div className="managecategory px-4 py-4 text-3xl">ManageCategory</div>

      <div className="table">
        
        <table className="table table-borderless table-nowrap">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Job Title</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Annette Black</td>
              <td>Industrial Designer</td>
              <td>10, Nov 2021</td>
              <td>
                <span className="badge bg-success-subtle text-success">Active</span>
              </td>
              <td>
                <div className="hstack gap-3 fs-15">
                  <a href="javascript:void(0);">
                    <i className="ri-settings-4-line"></i>
                  </a>
                  <a href="javascript:void(0);" className="link-success">
                    <i className="ri-delete-bin-5-line"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bessie Cooper</td>
              <td>Graphic Designer</td>
              <td>13, Nov 2021</td>
              <td>
                <span className="badge bg-success-subtle text-success">Active</span>
              </td>
              <td>
                <div className="hstack gap-3 fs-15">
                  <a href="javascript:void(0);">
                    <i className="ri-settings-4-line"></i>
                  </a>
                  <a href="javascript:void(0);" className="link-success">
                    <i className="ri-delete-bin-5-line"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Leslie Alexander</td>
              <td>Product Manager</td>
              <td>17, Nov 2021</td>
              <td>
                <span className="badge bg-success-subtle text-success">Active</span>
              </td>
              <td>
                <div className="hstack gap-3 fs-15">
                  <a href="javascript:void(0);">
                    <i className="ri-settings-4-line"></i>
                  </a>
                  <a href="javascript:void(0);" className="link-success">
                    <i className="ri-delete-bin-5-line"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Lenora Sandoval</td>
              <td>Applications Engineer</td>
              <td>25, Nov 2021</td>
              <td>
                <span className="badge bg-danger-subtle text-danger">Disabled</span>
              </td>
              <td>
                <div className="hstack gap-3 fs-15">
                  <a href="javascript:void(0);">
                    <i className="ri-settings-4-line"></i>
                  </a>
                  <a href="javascript:void(0);" className="link-success">
                    <i className="ri-delete-bin-5-line"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


    </>
  );
};

export default ManageCategory;
