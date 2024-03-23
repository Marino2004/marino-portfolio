import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "cv") {
    window.open("https://drive.google.com/file/d/1goWpECWTBEyCqlalCW_UAEpuSxmYM80v/view", "_blank");
  }

  return <span></span>;
};

export default Gui;
