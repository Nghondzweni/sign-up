export const formData = [
  {
    label: "Name",

    type: "text",
    placeholder: "Kender Jener",
  },

  {
    label: "Gender",
    type: "radio",
    options: [
      {
        name: "male",
        value: "male",
        icon:"male"
      },
      {
        name: "female",
        value: "female",
        icon:"female"
      },
    ],
  },

  {
    label: "Date of Birth",
    type: "date",
  },
  {
    label: "Email",
    type: "email",
    placeholder: "Kendall@gmail.com",
  },

  {
    label: "Mobile",
    type: "text",
  },
  {
    label: "Customer ID",
    type: "text",
  },
  {
    label: "Membership",
    type: "radio",
    options: [
      {
        name: "Classic",
        value: "classic",
        icon:"card"
      },
      {
        name: "Gold",
        value: "gold",
        icon:"card"
      },
      {
        name: "Silver",
        value: "silver",
        icon:"card"
      },
    ],
  },
];
