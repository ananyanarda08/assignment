export const employeeData = [
  {
    name: "Basic Information",
    span: 12,
    label: "Basic Information",
    id: "basic-information",
    sidebarKey: "basic-information",
    type: "collapse",
    fields: [
      {
        span: 12,
        label: "Employe ne ID",
        id: "employeeid",
        placeholder: "Employee ID",
        type: "text",
        validation: [
          {
            type: "required",
            message: "Please enter Employee ID",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
     {
        span: 12,
        label: "First Name",
        id: "firstname",
        placeholder: "First Name",
        type: "text",
        validation: [
          {
            type: "required",
            message: "Please enter First Name",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
      {
        span: 12,
        label: "Last Name",
        id: "lastName",
        placeholder: "Last Name",
        type: "text",
        validation: [
          {
            type: "required",
            message: "Please enter Last Name",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
      {
        span: 12,
        label: "Phone Number",
        id: "Phonenumber",
        placeholder: "Phone Number",
        type: "text",
        validation: [
          {
            type: "required",
            message: "Please enter Phone Number",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
      {
        span: 12,
        label: "Email Address",
        id: "Emailaddress",
        placeholder: "Email Address",
        type: "text",
        validation: [
          {
            type: "required",
            message: "Please enter Email Address",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
      {
        span: 12,
        label: "Birth Date",
        id: "Birthdate",
        placeholder: "DD/MM/YY",
        type: "date",
        validation: [
          {
            type: "required",
            message: "Please enter Birth Date",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max length should be 8 characters",
          },
        ],
      },
      {
        span: 12,
        label: "Gender",
        id: "Gender",
        type: "select",
        placeholder: "Gender",
        options: [
          {
            span: 12,
            label: "Male",
            value: "Male",
          },
          {
            span: 12,
            label: "Female",
            value: "Female",
          },
          {
            span: 12,
            label: "Other",
            value: "Other",
          },
        ],
        validation: [
          {
            type: "required",
            message: "Please select your gender!",
          },
        ],
      },
      {
        span: 12,
        label: "Status",
        id: "Status",
        type: "select",
        placeholder: "Status",
        options: [
          {
            span: 12,
            label: "Active",
            value: "Active",
          },
          {
            span: 12,
            label: "Inactive",
            value: "Inactive",
          },
        ],
        validation: [
          {
            type: "required",
            message: "Please select the status.",
          },
        ],
      },
      {
        span: 12,
        label: "Password",
        id: "Password",
        placeholder: "Password",
        type: "password", 
        validation: [
          {
            type: "required",
            message: "Please enter a password.",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max Length should be 8 characters.",
          },
        ],
      },
      {
        span: 12,
        label: "Confirm Password",
        id: "Confirmpassword",
        placeholder: "Confirm Password",
        type: "password", 
        validation: [
          {
            type: "required",
            message: "Please confirm your password.",
          },
          {
            type: "maxLength",
            value: "8",
            message: "Max Length should be 8 characters.",
          },
        ],
      },
      {
        label: "Save",
        type: "button",
        id: "save"
      }
    ],
  }
];
