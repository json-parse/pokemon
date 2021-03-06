const sortBy = (key, array) =>
  [...array].sort((a, b) => {
    if (a[key] < b[key]) {
      return -1;
    } else {
      return 1;
    }
  });

const search = (target, array) =>
  array.filter((element) => {
    if (
      element.name.includes(target.toLowerCase()) ||
      element.abilities.some((element) =>
        element.ability.name.includes(target.toLowerCase())
      )
    ) {
      return true;
    } else {
      return false;
    }
  });

const processData = (data, searchVal, sortVal) => {
  const filteredData = search(searchVal, data);
  return sortBy(sortVal, filteredData);
};

export default processData;
