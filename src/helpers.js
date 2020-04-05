import config from "./config";

export default config;

// Validate object contents based on given scheme
// Returns boolean
export const validateObject = (object, scheme) => {
  // Validate if all required fields are provided
  if (Object.entries(object).length <= Object.entries(scheme).length) {
    const errorMessage = `Object does not contain all required fields according to scheme`;
    console.error(errorMessage);
    throw new Error(errorMessage);
  }

  Object.keys(scheme).forEach(key => {
    // Check if key exists in object
    if (Object.keys(object).indexOf(key) < 0) {
      const errorMessage = `${key} is required by the scheme, but not found in the object`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // Retrieve value from object
    const value = object[key];

    // typeof Array is object, so check object isn't Array
    if (scheme[key] === "object" && Array.isArray(value)) {
      const errorMessage = `${key} is of type array, should be ${scheme[key]}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    // Check if value is as expected from scheme
    if (typeof value !== scheme[key]) {
      // typeof Array is object, so check that on first fail
      if (!(scheme[key] === "array" && Array.isArray(value))) {
        // An inconsistency was definitely found according to scheme
        const errorMessage = `${key} is of type ${typeof value}, should be ${
          scheme[key]
        }`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    }
  });

  return true;
};

// Validate property existance in config
// Trows Error on error, otherwise returns true
export const validateConfig = (...validateProperty) => {
  for (const fullProperty of validateProperty) {
    let lastProperty = config;

    // Split on dot to allow nested properties
    for (const singleProperty of fullProperty.split(".")) {
      lastProperty = lastProperty[singleProperty];

      if (!lastProperty) {
        const errorMessage = `Missing property \`${fullProperty}\` in config`;
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    }
  }

  return true;
};

// Validate property existance in config, but just return true or false
export const softValidateConfig = (...validateProperty) => {
  // Save original console.error function
  const originalConsoleError = console.error;

  try {
    // Turn off console.error messages
    window["console"]["error"] = () => {};

    return validateConfig(...validateProperty);
  } catch (errorMessage) {
    return false;
  } finally {
    // Turn on console.error messages
    window["console"]["error"] = originalConsoleError;
  }
};

// Convert string to sanitized integer
export const financial = float => {
  // Create 2 decimal float of input
  float = parseFloat(float).toFixed(2);

  return float
    .toString() // to string to use replace
    .replace(".", "{decimalSeperator}") // save decimal separator for later
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${i18n("_thousandsSeparator")}`) // break with thousands seperator every 3rd integer
    .replace("{decimalSeperator}00", "{decimalSeperator}-") // replace double zero's in decimal with dash
    .replace("{decimalSeperator}", i18n("_decimalSeparator")); //replace decimal seperator temp variable with locale seperator
};

const replaceVariablesInString = (string, variables) => {
  if (variables) {
    for (const variable of Object.entries(variables)) {
      string = string.replace(`{${variable[0]}}`, variable[1]);
    }
  }
  return string;
};

// Return translation from string if found and not null, otherwise return original string
export const i18n = (string, variables) => {
  let locale = false;

  try {
    validateConfig("locale");
    // Require instead of import to allow import fail
    locale = require("./locale");
  } catch {
    // If locale fails, return raw string
    if (string === "_thousandsSeparator") return " ";
    // fallback to general separator based on https://en.wikipedia.org/wiki/Decimal_separator#Digit_grouping
    else if (string === "_decimalSeparator") return ",";
    // fallback to general separator based on https://en.wikipedia.org/wiki/Decimal_separator#Arabic_numerals
    else return replaceVariablesInString(string, variables);
  }

  // Get dictionary for locale, otherwise use first dictonary
  let dictionary = locale[config.locale];
  if (!dictionary) dictionary = locale[Object.keys(locale)[0]];

  // Get translation, otherwise use original string
  let translatedString = dictionary[string];
  if (!translatedString) translatedString = string;

  // Replace possible variables with their value
  return replaceVariablesInString(translatedString, variables);
};

/**
 * Determine if currently viewed from a larger screen
 * @return {boolean} True if screen is larger then medium breakpoint
 */
export const isLargerScreen = () => {
  validateConfig("breakpoints.medium");

  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  return windowWidth > config.breakpoints.medium;
};
