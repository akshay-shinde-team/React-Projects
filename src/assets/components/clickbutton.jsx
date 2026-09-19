function ClickButton({text="Dont Touch Me", color ="yellow", fontSize = 44, handleClick }){
const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
    cursor:"pointer"
}

return(
    <button style={buttonStyle} onClick={handleClick}>{text}</button>
)

}

export {ClickButton};