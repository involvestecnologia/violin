import { rem, transparentize } from "polished";

const involves = {
  typography: {
    fontFamily: "'Open Sans', sans-serif",
    htmlFontSize: "100%",
    fontSize: rem(14),
    fontWeight: {
      light: "300",
      regular: "400",
      semiBold: "600",
      bold: "700"
    },
    lineHeight: "1.5"
  },
  breakpoint: {
    sm: "@media(min-width: 768px)",
    md: "@media(min-width: 992px)",
    lg: "@media(min-width: 1200px)"
  },
  zIndex: {
    z1: 100, 
    z2: 200, 
    z3: 300, 
    z4: 400, 
    z5: 500, 
    z6: 600, 
    z7: 700, 
    z8: 800, 
    z9: 900, 
  },
  spacing: {
    space4: 4,
    space8: 8,
    space16: 16,
    space24: 24,
    space32: 32,
    space40: 40,
    space48: 48,
    space56: 56,
    space64: 64
  },
  shadow: {
    shadowBorder1: "0 0 0 1px",
    shadowBorder2: "0 0 0 2px",
    shadow3: "0 2px 3px",
    shadow4: "0 1px 4px",
    shadow6: "0 3px 6px",
    shadow8: "0 4px 8px",
    shadow12: "0 6px 12px",
    shadow16: "0 8px 16px",
    shadow24: "0 10px 24px"
  },
  borderRadius: {
    border4: "4px",
    border8: "8px",
    border12: "12px",
    border20: "20px",
    border24: "24px"
  },
  palette: {
    primary: {
      dark: "#3864B7",
      regular: "#4693F8",
      light: "#C7DFFD",
      white: "#F6FAFF",
      shadow: transparentize(0.75, "#3864B7")
    },
    primaryAcid: {
      regular: "#5E78FF",
      dark: "#4865FC"
    },
    accent: {
      dark: "#A33E47",
      regular: "#FC4949",
      light: "#FDA4A4",
      white: "#FFECEC",
      shadow: transparentize(0.75, "#A33E47")
    },
    system: {
      dark: "#10213E",
      regular: "",
      light: "#F4F5F6",
      white: "#FFFFFF",
      shadow: transparentize(0.75, "#10213E")
    },
    default: {
      dark: "#68778C",
      regular: "#9AA9BC",
      light: "#CCD4DD",
      white: "#E5E8EB",
      shadow: transparentize(0.75, "#68778C")
    },
    done: {
      dark: "#219B81",
      regular: "#27C499",
      light: "#B3EADB",
      white: "#E9F9F5",
      shadow: transparentize(0.75, "#219B81")
    },
    error: {
      dark: "#B64458",
      regular: "#ED4759",
      light: "#F9C2C8",
      white: "#FDEDEF",
      shadow: transparentize(0.75, "#B64458")
    },
    alert: {
      dark: "#9B8E51",
      regular: "#EECE5A",
      light: "#F6E6AC",
      white: "#FDFAEE",
      shadow: transparentize(0.75, "#9B8E51")
    },
    progress: {
      dark: "#46829B",
      regular: "#60BBD6",
      light: "#AFDDEA",
      white: "#EFF8FB",
      shadow: transparentize(0.75, "#46829B")
    },
    white: {
      regular: "#FFFFFF"
    }
  }
};

export { involves };