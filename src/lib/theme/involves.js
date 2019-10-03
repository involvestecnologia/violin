const involves = {
    palette: {
      primary: {
        dark: "#3864B7",
        regular: "#4693F8",
        light: "#C7DFFD",
        white: "#F6FAFF",
        acid: {
          regular: "#5E78FF",
          dark: "#4865FC"
        }
      },
      accent: {
        dark: "#A33E47",
        regular: "#FC4949",
        light: "#FDA4A4",
        white: "#FFECEC"
      },
      system: {
        dark: "#10213E",
        regular: "",
        light: "#F4F5F6",
        white: "#FFFFFF"
      },
      default: {
        dark: "#68778C",
        regular: "#9AA9BC",
        light: "#CCD4DD",
        white: "#E5E8EB"
      },
      done: {
        dark: "#219B81",
        regular: "#27C499",
        light: "#B3EADB",
        white: "#E9F9F5"
      },
      error: {
        dark: "#B64458",
        regular: "#ED4759",
        light: "#F9C2C8",
        white: "#FDEDEF"
      },
      alert: {
        dark: "#9B8E51",
        regular: "#EECE5A",
        light: "#F6E6AC",
        white: "#FDFAEE"
      },
      progress: {
        dark: "#46829B",
        regular: "#60BBD6",
        light: "#AFDDEA",
        white: "#EFF8FB"
      },
      white: {
        regular: "#FFFFFF"
      }
    },
    media: {
      sm: "@media(min-width: 768px)",
      md: "@media(min-width: 992px)",
      lg: "@media(min-width: 1200px)"
    }
};

export default involves;
export { involves };