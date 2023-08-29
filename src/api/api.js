import supabase from "../utils/supabase.utils"

export const getAllProducts = async(options) => {
  const response = supabase.from('Product').select('*')

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