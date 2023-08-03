const Buttons = ({clear, input, plusMinus, totalAns}) => {


    return(
        <div> 
            <table>

                <tbody>
                    <tr>
                        
                        <th onClick={clear}>C</th>
                        <th onClick={plusMinus}> +/-</th>
                        <th onClick={input}> % </th>
                        <th onClick={input}> / </th>
                    </tr>

                    <tr>
                        <th onClick={input}> 7 </th>
                        <th onClick={input}> 8 </th>
                        <th onClick={input}> 9 </th>
                        <th onClick={input}> * </th>
                    </tr>

                    <tr>
                        <th onClick={input}> 4 </th>
                        <th onClick={input}> 5 </th>
                        <th onClick={input}> 6 </th>
                        <th onClick={input}> - </th>
                    </tr>

                    <tr>
                        <th onClick={input}> 1 </th>
                        <th onClick={input}> 2 </th>
                        <th onClick={input}> 3 </th>
                        <th rowSpan={2} onClick={input}> + </th>
                    </tr>

                    <tr>
                        <th onClick={input}> . </th>
                        <th onClick={input}> 0 </th>
                        <th onClick={totalAns}> = </th>
                    </tr>
                </tbody>
            </table>
        </div>
    )
} 
export default Buttons;