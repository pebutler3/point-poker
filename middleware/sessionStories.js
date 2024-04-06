import { useGetStoriesBySessionId } from '../composables/useGetStoriesBySessionId';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const supabase = useSupabaseClient();
  useGetStoriesBySessionId(supabase, to.params.id[0]);
})

