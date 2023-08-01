const FormInput = ({label, textarea, ...others}) => {


  return (
    <div className="w-full">
      <label className="text-xs">{label}</label>
      {
        !textarea ?
        <input 
          className={`
            text-sm invalid:text-red-600 invalid:border-red-500 border rounded border-[#D0BFBF] w-full px-2 py-1` 
          } {...others} 
        /> 
        :
        <textarea className="text-sm border rounded border-[#D0BFBF] w-full px-2 py-1" {...others}></textarea>
      }
    </div>
  )
}

export default FormInput;