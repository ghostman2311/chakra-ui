const semanticTokens = {
  primary: {
    base: { _light: "blue.500", _dark: "orange.500" },
    highContrast: { _light: "blue.800", _dark: "orange.100" },
    lowContrast: { _light: "blue.100", _dark: "orange.800" },
    hover: { _light: "blue.400", _dark: "orange.400" },
    visited: { _light: "blue.700", _dark: "orange.550" },
    // ! Deprecating primary.light
    light: { _light: "blue.100", _dark: "orange.100" },
    // ! Deprecating primary.dark
    dark: { _light: "blue.700", _dark: "orange.800" },
    // ! Deprecating primary.pressed
    pressed: { _light: "blue.400", _dark: "orange.800" },
  },
  body: {
    base: { _light: "gray.800", _dark: "gray.100" },
    medium: { _light: "gray.500", _dark: "gray.400" },
    light: { _light: "gray.200", _dark: "gray.600" },
    // ! Deprecating body.inverted
    inverted: { _light: "gray.100", _dark: "gray.800" },
  },
  background: {
    base: { _light: "white", _dark: "red" },
    highlight: { _light: "gray.100", _dark: "gray.900" },
  },
  disabled: { _light: "gray.400", _dark: "gray.500" },
  success: {
    base: "green.500",
    light: "green.100",
    outline: { _light: "success.base", _dark: "success.light" },
    // ! Deprecating success.neutral
    neutral: { _light: "green.100", _dark: "green.900" },
  },
  colors: {
    text: {
      _light: "base",
    },
    title: {
      _light: "#364A63",
      _dark: "white",
    },
    heading: {
      _light: "heading",
      _dark: "white",
    },
    headerBackground: {
      _light: "rgba(var(--bs-white-rgb),var(--bs-bg-opacity))",
      _dark: "#101924",
    },
    background: {
      _light: "white",
      _dark: "#101924",
    },
    specificBackground: {
      _light: "white",
      _dark: "#18212d",
    },
    link: {
      _light: "link",
      _dark: "link",
    },
    header: {
      _light: "#F5F6FA",
      _dark: "#2B3C51",
    },
    cancelButton: {
      _light: "#fceceb",
      _dark: "#3d2a32",
    },
    border: {
      _light: "rgba(0, 0, 0, 0.125)",
      _dark: "#203247",
    },
  },
};

export default semanticTokens;
