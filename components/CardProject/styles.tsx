export const useStyles = () => ({
  cardContainer: {
    maxWidth: "389px",
    minWidth: "330px",
  },
  cardPaper: {
    position: "relative",
    maxWidth: "389px",
    minWidth: "330px",
    borderRadius: "26px 26px 0px 0px",
    border: "solid 1px #FFCC01",
  },
  cardImg: {
    position: "absolute",
    backgroundColor: "primary.main",
    borderRadius: "19px 0px 0px 19px",
    zIndex: 10,
    top: "2em",
    right: 0,
    width: "186px",
    py: "4px",
    px: "12px",
  },
  cardCircleHouse: {
    background: "white",
    width: 54,
    height: 54,
    borderRadius: "50%",
    position: "absolute",
    margin: "0px auto",
    left: 0,
    right: 0,
    top: "-1.5em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    // mt: "-2em",
    zIndex: 10,
  },
  requestBtn: {
    mt: "20px",
    color: "#FFCC01",
    width: "283px",
  },
});
