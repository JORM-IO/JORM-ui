import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wfapkikzcykkjzxihggu.supabase.co'
const supabaseKey = process.env.SUPABASEKEY
const supabase = createClient(supabaseUrl, supabaseKey)

const table = 'jorm-ui-visualizer'

const api = {
    create: async (key, css) => {
        const { data, error } = await supabase
            .from(table)
            .insert([
                { key, css },
            ])
        if (error) console.log(error)
        return data
    },
    read: async (key) => {
        const { data, error } = await supabase
            .from(table)
            .select('css')
            .eq('key', key)
        if (error) console.log(error)
        return data
    },
    update: async (key, css) => {
        const { data, error } = await supabase
            .from(table)
            .update({ css })
            .eq('key', key)
        if (error) console.log(error)
        return data
    },
    delete: async (key) => {
        const { data, error } = await supabase
            .from(table)
            .delete()
            .eq('key', key)
        if (error) console.log(error)
        return data
    }
}

export default api
