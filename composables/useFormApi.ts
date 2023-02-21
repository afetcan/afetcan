import { Directus } from '@directus/sdk'
// Map your collection structure based on its fields.
export interface Charity {
  name: string
  websiteUrl: string
  donationUrl: string
  shortDescription: string
  description: string
  bank?: string
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type IForm = {
  // [collection_name]: typescript_type
  charity: Charity
}

export function useFormApi() {
  const directus = new Directus<IForm>('https://form.afetcan.com')

  const newCharity = async (charity: Charity) => {
    const response = await directus.items('charity').createOne(charity)
    return response
  }

  return {
    newCharity,
    directus,
  }
}
