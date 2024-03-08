import styles from "./Header.module.css";
import { useAccount } from "wagmi";
import CustomButton from "./CustomButton";

function Header() {
  const { address } = useAccount();

  return (
    <div className={styles.container}>
      <div className={styles.logo}>notfunnytoken</div>
      <div className={styles.account}>
        <CustomButton />
      </div>
    </div>
  );
}

export default Header;
