export const changeRemainingColor = (founds, remaining) => {
  if (founds / 4 > remaining) {
    return "alert alert-warning p-0 mt-1";
  } else if (founds / 2 > remaining) {
    return "alert alert-danger p-0 mt-1";
  } else {
    return "alert alert-success p-0 mt-1";
  }
};
