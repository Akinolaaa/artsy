import supabase from "../utils/supabase.utils"

export const getAllProducts = async(options) => {
  let response = supabase.from('Product').select('*')

  if (options?.name) {
    response = response.ilike('name', `%${options?.name}%`)
  }
  
  const { data: products, error } = await response;
  if(error) {
    throw new Error("something went wrong")
  }
  return products
}

export const getSingleProduct = async(productId) => {
  const response = supabase.from('Product').select('*').eq('id', productId)

  const { data: products, error } = await response;
  if(error) {
    throw new Error("something went wrong while getting single product")
  }
  return products[0];
}

export const addManyProducts = async(products) => {
  const { data, error } = await supabase.from('Product').insert([...products]);
  if(data){
    console.log("success")
  } else {
    console.log(error)
  }
}