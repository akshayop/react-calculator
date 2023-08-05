const Display = ({inputText, setInputText, answer }) => {

    const onchangeInput = (e) => {

        if(e.target.value === "") {
            setInputText(e.target.value)
        }
    }

    return(
        <div>
            {answer === "" ? (
                <input 
                    type="text"
                    placeholder="00"
                    maxLength={12}
                    autoComplete="off"
                    onChange={onchangeInput}
                />
                    
            ) : (
                <>
                    <input 
                        type="text"
                        value={inputText}
                        placeholder="0"
                        maxLength={12}
                        disabled
                    />

                    <input 
                        type="text"
                        value={answer}
                        disabled
                    />
                </>
            )}
        </div>
    )
}

export default Display;