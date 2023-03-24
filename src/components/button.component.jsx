const LightBlueButton = ({children}) => {
  return(
    <button className="font-white bg-[#3341C1] py-[1rem] px-[4rem]">
      {children}
    </button>
  )
}



export const buttonTypes = {
  lightBlue: 'lightBlue',
}

const generateButton = (buttonType= buttonTypes.lightBlue) => {

  return (
    {
      [buttonTypes.lightBlue]: LightBlueButton
    }[buttonType]
  )
}



export default function Button({children, buttonType, ...otherProps}) {
  const CustomButton = generateButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  )
}

