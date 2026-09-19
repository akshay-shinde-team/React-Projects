function Destbutton({color, text, fontSize}){
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  } ; 
  return (
    <button style={buttonStyle}>{text}</button>
  )
}

export {Destbutton};