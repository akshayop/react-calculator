import styles from "../styles/app.module.css"

const Display = ({input, setInput, answer }) => {

    const onchangeInput = (e) => {

       console.log(e.target.value);
        if(e.target.value === "") {
            setInput(e.target.value)
            
        }
    }

    console.log(answer);

    return(
        <div>
            {answer === "" ? (
                <input 
                    type="text"
                    className={styles.screen}
                    value={input}
                    placeholder="00"
                    maxLength={12}
                    autoComplete="off"
                    onChange={onchangeInput}
                />
                    
            ) : (

                <input 
                    className={styles.screen}   
                    type="text"
                    value={answer}
                    disabled
                />
                
            )}
        </div>
    )
}

export default Display;