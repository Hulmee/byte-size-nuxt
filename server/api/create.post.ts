import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  // inti the supabse server client and get router Paramators
  const client = await serverSupabaseClient(event)
  const body = await readBody(event)
  let newLink = {}


  const { data } = await client
    .from('links')
    .insert([
      { 'long_link': body.link }
    ])
    .select()
  newLink = data
  // console.log(newLink);


  return { newLink }

})
