export const formData = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Kender Jener",
  },

  {
    label: "Gender",
    type: "radio",
    name: "gender",
    options: [
      {
        name: "male",
        value: "male",
        icon: "male",
      },
      {
        name: "female",
        value: "female",
        icon: "female",
      },
    ],
  },

  {
    label: "Date of Birth",
    type: "date",
    name: "date",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Kendall@gmail.com",
  },

  {
    label: "Mobile",
    type: "text",
    name: "mobile",
  },
  {
    label: "Customer ID",
    type: "text",
    name: "customerId",
  },
  {
    label: "Membership",
    type: "radio",
    name: "membership",
    options: [
      {
        name: "Classic",
        value: "classic",
        icon: "card",
      },
      {
        name: "Gold",
        value: "gold",
        icon: "card",
      },
      {
        name: "Silver",
        value: "silver",
        icon: "card",
      },
    ],
  },
];
