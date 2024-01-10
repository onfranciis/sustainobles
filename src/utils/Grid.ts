export const getAlphabet = (index: number) => {
  if (index % 7 === 1) {
    return "a";
  } else if (index % 7 === 2) {
    return "b";
  } else if (index % 7 === 3) {
    return "c";
  } else if (index % 7 === 4) {
    return "d";
  } else if (index % 7 === 5) {
    return "e";
  } else if (index % 7 === 6) {
    return "f";
  } else if (index % 7 === 0) {
    return "g";
  } else {
    return "a";
  }
};

export const getAlphabetLG = (index: number) => {
  if (index % 5 === 1) {
    return "a";
  } else if (index % 5 === 2) {
    return "b";
  } else if (index % 5 === 3) {
    return "c";
  } else if (index % 5 === 4) {
    return "d";
  } else if (index % 5 === 0) {
    return "e";
  } else {
    return "a";
  }
};

export const getAlphabetMD = (index: number) => {
  if (index % 3 === 1) {
    return "a";
  } else if (index % 3 === 2) {
    return "b";
  } else if (index % 3 === 0) {
    return "c";
  } else {
    return "a";
  }
};
