module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        basis_grotesque_proregular: ["basis_grotesque_proregular"],
        basis_grotesque_prolight: ["basis_grotesque_prolight"],
        basis_grotesque_probold: ["basis_grotesque_probold"],
        freightdispproblauploadedfile: ["freightdispproblauploadedfile"],
        BasisGrotesquePro_Medium: ["BasisGrotesquePro-Medium"],
        BasisGrotesquePro_Black: ["BasisGrotesquePro-Black"]
      },
      colors: {
        "regal-blue": "#3f2355",
        "regal-orange": "#fb5100",
        "regal-font-gray": "#828385",
        "regal-gray-background": "#F8F8FA",
        "regal-light-gray-background": "#fdfdfe"
      },
      letterSpacing: { wider: "0.004em" },
      fontSize: {
        "footer-heading-font": ["42px", "54px"],
        "footer-typo-font": ["20px", "32px"],
        "footer-icon-font": ["16px", "30px"],
        "footer-social-icon": "23px",
        "auth-image-heading-font": ["36px", "45px"]
      }
    }
  },
  variants: { extend: {} },
  plugins: []
};
