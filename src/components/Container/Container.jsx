import styles from "./Container.module.scss";
import PropTypes from "prop-types";

const Container = ({ children }) => (
  <div className={styles.Container}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;