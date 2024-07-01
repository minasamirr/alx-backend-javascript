function cleanSet(set, startString) {
  let result = '';
  set.forEach(value => {
    if (value.startsWith(startString)) {
      result += `${value.substring(startString.length)}-`;
    }
  });
  // Remove the last '-' from the result string
  return result.slice(0, -1);
}

module.exports = cleanSet;
