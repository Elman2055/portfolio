import sun from "../../assets/sunIcon.png";
import moon from "../../assets/moonIcon.png";
import cloud from "../../assets/cloudIcon.png";
import nightCloud from "../../assets/nightCloud.png";
import { Switch } from "@mui/material";
import { styled } from "@mui/material/styles";

const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 47,
  padding: 6,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(7px)",
    transition: "transform 1s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(40px)",
      transition: "transform 1s ease-in-out",
      "&:hover": {
        backgroundColor: "transparent",
      },
      "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          background: `no-repeat center/70% 70% url(${moon})`,
          transition: "background 0.7s ease-in-out",
        },
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        background:
          theme.palette.mode === "dark"
            ? "#8796A5"
            : `no-repeat center/ 80px 70px url(${nightCloud})`,
        transition: "background 0.8s ease-in-out",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "white",
    width: 32,
    height: 32,
    position: "relative",
    top: "6.5px",
    transition: "background-color 0.8s ease-in-out",
    "&::before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      background: `no-repeat center/70% 70% url(${sun})`,
      transition: "background 0.7s ease-in-out",
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    background:
      theme.palette.mode === "dark"
        ? "#8796A5"
        : `no-repeat center/ 90px 100px url(${cloud})`,
    borderRadius: 20,
    transition: "background 0.8s ease-in-out",
  },
}));

export default ThemeSwitch;
