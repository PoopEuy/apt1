const group = (log) => {
  const groups = log.reduce((acc, curr) => {
    const date = curr.ts.slice(0, 10);
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(curr);
    return acc;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      data: groups[date],
    };
  });
  return groupArrays;
};

module.exports = group;
