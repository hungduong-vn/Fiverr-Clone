const calcStar = (stars) => {
  let totalStar =
    stars.reduce((prev, curr) => prev + curr, 0) / stars.length;
  return Math.round(totalStar * 10) / 10;
};

export { calcStar };
