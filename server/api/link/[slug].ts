import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
    // inti the supabse server client and get router Paramators
    const client = await serverSupabaseClient(event),
        id = getRouterParam(event, 'slug')
    // create variables to store data and return
    let msg = '',
        linkURL = ''

    // get data from supabase
    const { data } = await client
        .from('links')
        .select('*')
        .eq('id', id)
        .single()

    if (data === null) {
        // check if data was returned, if null set msg
        msg = `Link not found`
    }

    else {
        // Check if the link has expired. If it has, set the 'msg' variable. 
        // Otherwise, set the 'linkURL' variable to the long link.
        const expiresAt = new Date(data.expires_at)
        if (expiresAt < new Date()) {
            msg = `Link has expired`
        }
        else {
            linkURL = data.long_link
        }
    }

    return { msg, linkURL }
})