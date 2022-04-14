import { useNavigate } from "react-router-dom";
import styles from "./VasylPage.module.css";
import { RouteConst } from "../../common/RouterConst";
import { useEffect } from "react";

const VasylPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    console.log("isAdmin", isAdmin);
    isAdmin === true && navigate(RouteConst.NOT_FOUND_PAGE);
  });

  return (
    <div className={styles["container"]}>
      <h3
        onClick={() => {
          navigate(RouteConst.NOT_FOUND_PAGE);
        }}
      >
        VasylPage
      </h3>
    </div>
  );
};

export default VasylPage;
