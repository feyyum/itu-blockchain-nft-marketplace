import styles from "./CustomButton.module.css";
import { ConnectKitButton } from "connectkit";

import { ReactComponent as Right } from "../assets/icons/right.svg";

const CustomButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, isConnecting, show, hide, address, ensName, chain }) => {
        return (
          <button onClick={show} className={styles.container}>
            {isConnected ? (
              <p>
                {`${address.slice(0, 5)}...${address.slice(
                  address.length - 5,
                  address.length
                )}`}
              </p>
            ) : (
              <div className={styles.connected}>
                <p>Connect Wallet</p>
                <Right width={16} height={16} />
              </div>
            )}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};

export default CustomButton;
