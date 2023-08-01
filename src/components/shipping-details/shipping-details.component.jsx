import FormInput from "../form-input/formInput.component";
import FormDropdown from "../dropdown/form-dropdown.component";

const ShippingDetails = () => {

  return (
    <div className={`flex flex-col items-center gap-4`}>
      <FormInput label="Email" type="email"/>
      <FormInput label="Full Name"/>
      <FormDropdown label="Choose a wallet" dropdownOptions={["BTC", "CBG", "AYO"]} />
      <FormDropdown label="City" dropdownOptions={["Lagos", "New York", "Benin"]} />
      <div className="flex gap-2">
        <FormDropdown label="Country" dropdownOptions={["Spain", "Nigeria", "Germany", "France"]}/>
        <FormInput label="Postal Code" />
      </div>
      <FormInput label="Phone number"/>
      <button className="whitespace-nowrap text-white bg-[#333333] py-1 px-4 w-full h-full">
        Proceed to Payment
      </button>
    </div>
  )
}

export default ShippingDetails;