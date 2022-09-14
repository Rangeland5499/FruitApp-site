/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        "beige":"rgba(237, 228, 196, 0.60)",
        "bgHome":"rgba(7, 131, 20, 0.45)",
        "beigeLight":"rgba(237, 228, 196, 0.60)",
        "bgProduct":"rgba(154, 217, 21, 0.60)",
        "bgAddProduct":"rgba(255, 247, 46, 0.80)",
        "bgOrders":"rgba(241, 206, 18, 0.79)",
        "bgCustomer":"rgba(255, 142, 37, 0.60)",
        "bgSignOut":"rgba(226, 66, 13, 0.75)"

      },
      backgroundImage:{
        "backgroundImage":"url(../src/image/bImage.jpg)",
      },
    },
  },
  plugins: [],
};
