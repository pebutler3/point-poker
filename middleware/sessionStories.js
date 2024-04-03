import { createClient } from '@supabase/supabase-js';
import { useSession } from '../stores/session';
const supabase = createClient('https://moerqnfdfdkgbmqvurin.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vZXJxbmZkZmRrZ2JtcXZ1cmluIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1OTk5MjIsImV4cCI6MTk5NTE3NTkyMn0.MfVmwTXQHW5zeNkAXgiIfgmqmNx2LgQjPh0ANstCSpM');
const store = useSession();

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { data } = await supabase.from(
    'stories')
    .select()
    .eq('session_id', to.params.id[0])

    store.setSessionStories(data);
})

