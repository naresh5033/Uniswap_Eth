import React from "react";
import { formatUnits, parseUnits } from "ethers/lib/utils";

import styles from "../styles";

const Balance = ({ tokenBalance }) => {
  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        {tokenBalance ? (
          <>
            <span className={styles.balanceBold}>Balance: </span>
            {formatUnits(tokenBalance ?? parseUnits("0"))} 
          </>// that parse/unit is gon pass the str of 0 to a BN
        ) : (
          ""
        )}
      </p>
    </div>
  );
};

export default Balance;
