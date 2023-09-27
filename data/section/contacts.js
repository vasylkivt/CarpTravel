const contacts = {
  mainTitle: {
    first: "CONTACT",
    second: "US",
  },
  sections: [
    {
      title: "Phone number",
      content: [
        { label: "+38 (098) 12 34 567", href: "tel:+38 (098) 12 34 567" },
        { label: "+38 (073) 12 34 567", href: "tel:+38 (073) 12 34 567" },
      ],
    },
    {
      title: "E-mail",
      content: [
        {
          label: "support@carptravel.com",
          href: "mailto:support@carptravel.com",
        },
      ],
    },
  ],

  socialMedia: {
    title: "Follow us",
    content: [
      { label: "facebook", href: "https://www.facebook.com/" },
      { label: "instagram", href: "https://www.instagram.com/" },
      { label: "youtube", href: "https://www.youtube.com/" },
      { label: "tiktok", href: "https://www.tiktok.com/" },
    ],
  },

  form: {
    name: {
      label: "Full name",
      placeholder: "John Smith",
      errorMessage: "Incorrect name",
    },
    email: {
      label: "E-mail",
      placeholder: "johnsmith@email.com",
      errorMessage: "Invalid email",
    },
    textarea: { label: "Message", placeholder: "", errorMessage: "" },
    btnText: "SEND",
  },
};

export default contacts;
