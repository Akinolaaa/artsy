const BlackButton = ({children}) => {
  return(
    <button className="whitespace-nowrap text-white bg-[#333333] py-1 px-4">
      {children}
    </button>
  )
}
const WhiteButton = ({children}) => {
  return(
    <button className="whitespace-nowrap border rounded font-black font-satoshi text-lg
    bg-white py-[1rem] px-[4rem]">
      {children}
    </button>
  )
}



export const buttonTypes = {
  black: 'black',
  white: 'white',
}

const generateButton = (buttonType= buttonTypes.black) => {

  return (
    {
      [buttonTypes.black]: BlackButton,
      [buttonTypes.white]: WhiteButton,
    }[buttonType]
  )
}



export default function Button({children, btnType, ...otherProps}) {
  const CustomButton = generateButton(btnType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  )
}

