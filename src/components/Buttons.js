import styles from "../styles/app.module.css"

const Buttons = ({clear, inputHandler, plusMinus, totalAns}) => {
    return(
        <div className={styles.button}> 
            <table>

                <tbody>
                    <tr>
                        
                        <th className={styles.symbol} onClick={clear}>C</th>
                        <th className={styles.symbol} onClick={plusMinus}> +/-</th>
                        <th className={styles.symbol} onClick={inputHandler}> % </th>
                        <th className={styles.symbol} onClick={inputHandler}> / </th>
                    </tr>

                    <tr>
                        <th className={styles.number} onClick={inputHandler}> 7 </th>
                        <th className={styles.number} onClick={inputHandler}> 8 </th>
                        <th className={styles.number} onClick={inputHandler}> 9 </th>
                        <th className={styles.symbol} onClick={inputHandler}> * </th>
                    </tr>

                    <tr>
                        <th className={styles.number} onClick={inputHandler}> 4 </th>
                        <th className={styles.number} onClick={inputHandler}> 5 </th>
                        <th className={styles.number} onClick={inputHandler}> 6 </th>
                        <th className={styles.symbol} onClick={inputHandler}> - </th>
                    </tr>

                    <tr>
                        <th className={styles.number} onClick={inputHandler}> 1 </th>
                        <th className={styles.number} onClick={inputHandler}> 2 </th>
                        <th className={styles.number} onClick={inputHandler}> 3 </th>
                        <th className={styles.symbol} rowSpan={2} onClick={inputHandler}> + </th>
                    </tr>

                    <tr>
                        <th className={styles.symbol} onClick={inputHandler}> . </th>
                        <th className={styles.number} onClick={inputHandler}> 0 </th>
                        <th className={styles.symbol} onClick={totalAns}> = </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 
export default Buttons;