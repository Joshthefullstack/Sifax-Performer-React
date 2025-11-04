import React from "react";
// @ts-ignore
import { Tagify } from "react-tagify";
import "@yaireo/tagify/dist/tagify.css";
import { useState, useRef } from "react";
import UserTagInput from "./UserTagInput";

interface TagData {
  value: string;
  avatar?: string;
  email?: string;
  [key: string]: any; // fallback for any other fields
}

export default function AddSupervisorOffcanvas() {
  const tagifyRef = useRef<any>(null);
   const [selectedUsers, setSelectedUsers] = useState<TagData[]>([]);

  const usersList: TagData[] = [
    {
      value: "Peter Parker",
      email: "peter.parker@sifax.com",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      value: "Pepper Potts",
      email: "pepper.potts@sifax.com",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
    {
      value: "Justiniano Cruz",
      email: "justiniano.cruz@sifax.com",
      avatar: "https://i.pravatar.cc/40?img=3",
    },
    {
      value: "Bruce Wayne",
      email: "bruce.wayne@sifax.com",
      avatar: "https://i.pravatar.cc/40?img=4",
    },
  ];

  const handleChange = (e: any) => {
    try {
      const value = JSON.parse(e.detail.value);
      setSelectedUsers(value);
    } catch {
      setSelectedUsers([]);
    }
  };


  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasSupervisor"
      aria-labelledby="offcanvasSupervisorLabel">
      <div className="offcanvas-header">
        <h5 id="offcanvasSupervisorLabel" className="offcanvas-title">
          Add Staffs to Supervisor
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"></button>
      </div>

      <div className="offcanvas-body my-auto mx-0 flex-grow-1">
        {/* Subsidiary Select */}
        <div className="form-floating form-floating-outline mb-5">
          <select name="subsidiary" id="userSibsidiary" className="form-select">
            <option value="">Head Office</option>
            <option value="">Ports and Cargo</option>
            <option value="">SAHCO Plc</option>
            <option value="">SIFAX ICT</option>
            <option value="">SIFAX Offdock</option>
            <option value="">SIFAX Marine</option>
            <option value="">SIFAX Burma</option>
          </select>
          <label htmlFor="userSibsidiary">Subsidiary</label>
        </div>

        {/* Department Select */}
        <div className="form-floating form-floating-outline mb-5">
          <select name="department" id="userDepartment" className="form-select">
            <option value="">Information Technology</option>
            <option value="">Procurement</option>
            <option value="">Operations</option>
            <option value="">Cargo</option>
            <option value="">Human Resources</option>
            <option value="">Administration</option>
            <option value="">MD's Office</option>
          </select>
          <label htmlFor="userDepartment">Department</label>
        </div>

        {/* Users Tagify Input */}
        <UserTagInput/>
      </div>
    </div>
  );
}


        // <div className="row mb-4">
        //   <div className="col-md-12">
        //     <div className="form-floating form-floating-outline">
        //       <Tagify
        //         tagifyRef={tagifyRef}
        //         settings={{
        //           enforceWhitelist: true,
        //           whitelist: usersList,
        //           dropdown: {
        //             enabled: 0,
        //             closeOnSelect: false,
        //             searchKeys: ["value", "email"],
        //           },
        //           templates: {
        //             tag: (tagData: TagData) => `
        //           <tag title="${tagData.value}" contenteditable="false" spellcheck="false" class="tagify__tag">
        //             <x title="remove tag" class="tagify__tag__removeBtn"></x>
        //             <div>
        //               <img src="${tagData.avatar}" width="20" height="20" style="border-radius:50%;margin-right:5px;vertical-align:middle;">
        //               <span>${tagData.value}</span>
        //             </div>
        //           </tag>
        //         `,
        //             dropdownItem: (item: TagData) => `
        //           <div class="tagify__dropdown__item">
        //             <img src="${item.avatar}" width="25" height="25" style="border-radius:50%;margin-right:8px;">
        //             <strong>${item.value}</strong>
        //             <small style="display:block;color:#777">${item.email}</small>
        //           </div>
        //         `,
        //           },
        //         }}
        //         onChange={handleChange}
        //       />
        //       <label htmlFor="TagifyUserList">Users List</label>
        //     </div>
        //   </div>

        //   {/* Submit button */}
        //   <button type="button" className="btn btn-primary mb-2 d-grid w-100">
        //     Submit
        //   </button>
        // </div>