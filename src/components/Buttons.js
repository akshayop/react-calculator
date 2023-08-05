const Buttons = ({clear, inputHandler, plusMinus, totalAns}) => {


    return(
        <div> 
            <table>

                <tbody>
                    <tr>
                        
                        <th onClick={clear}>C</th>
                        <th onClick={plusMinus}> +/-</th>
                        <th onClick={inputHandler}> % </th>
                        <th onClick={inputHandler}> / </th>
                    </tr>

                    <tr>
                        <th onClick={inputHandler}> 7 </th>
                        <th onClick={inputHandler}> 8 </th>
                        <th onClick={inputHandler}> 9 </th>
                        <th onClick={inputHandler}> * </th>
                    </tr>

                    <tr>
                        <th onClick={inputHandler}> 4 </th>
                        <th onClick={inputHandler}> 5 </th>
                        <th onClick={inputHandler}> 6 </th>
                        <th onClick={inputHandler}> - </th>
                    </tr>

                    <tr>
                        <th onClick={inputHandler}> 1 </th>
                        <th onClick={inputHandler}> 2 </th>
                        <th onClick={inputHandler}> 3 </th>
                        <th rowSpan={2} onClick={inputHandler}> + </th>
                    </tr>

                    <tr>
                        <th onClick={inputHandler}> . </th>
                        <th onClick={inputHandler}> 0 </th>
                        <th onClick={totalAns}> = </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 
export default Buttons;