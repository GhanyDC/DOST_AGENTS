# Supabase Quick Reference for Frontend Development

## Getting Your Supabase Credentials

1. Go to https://app.supabase.com
2. Select your project (or create a new one)
3. Navigate to **Settings** → **API**
4. Copy these two values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public**: This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Using Supabase in Your Components

### Client Components (Browser)

For client-side React components (with 'use client'):

```tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function MyComponent() {
  const supabase = createClient();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase
        .from('your_table')
        .select('*');
      
      if (error) console.error('Error:', error);
      else setData(data);
    }
    
    fetchData();
  }, []);

  return <div>{/* Your component */}</div>;
}
```

### Server Components

For server-side React components (default in Next.js App Router):

```tsx
import { createClient } from '@/lib/supabase/server';

export default async function MyServerComponent() {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('your_table')
    .select('*');

  if (error) {
    console.error('Error:', error);
    return <div>Error loading data</div>;
  }

  return <div>{/* Render your data */}</div>;
}
```

## Common Frontend Operations

### Fetching Data

```tsx
// Get all rows
const { data, error } = await supabase
  .from('posts')
  .select('*');

// Get specific columns
const { data, error } = await supabase
  .from('posts')
  .select('id, title, created_at');

// With filters
const { data, error } = await supabase
  .from('posts')
  .select('*')
  .eq('status', 'published')
  .order('created_at', { ascending: false })
  .limit(10);
```

### Real-time Subscriptions

```tsx
'use client';

import { useEffect } from 'react';
import { createClient } from '@/lib/supabase/client';

export function RealtimeComponent() {
  const supabase = createClient();

  useEffect(() => {
    // Subscribe to changes
    const channel = supabase
      .channel('table-changes')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
          schema: 'public',
          table: 'posts'
        },
        (payload) => {
          console.log('Change received!', payload);
        }
      )
      .subscribe();

    // Cleanup on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  return <div>Listening for real-time updates...</div>;
}
```

### Authentication (if needed later)

```tsx
'use client';

import { createClient } from '@/lib/supabase/client';

export function AuthComponent() {
  const supabase = createClient();

  // Sign up
  async function signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  }

  // Sign in
  async function signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  }

  // Sign out
  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  // Get current user
  async function getUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
  }

  return <div>{/* Your auth UI */}</div>;
}
```

### Using with React Hooks

```tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error) setPosts(data || []);
      setLoading(false);
    }

    fetchPosts();
  }, [supabase]);

  return { posts, loading };
}

// Use in component
export function PostsList() {
  const { posts, loading } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## Best Practices for Frontend

1. **Use Client Components for Interactivity**
   - Use `'use client'` for components with state, effects, or event handlers
   - Create the Supabase client inside the component

2. **Use Server Components for Initial Data**
   - Fetch initial data on the server for better performance
   - No JavaScript sent to client for data fetching logic

3. **Create Custom Hooks**
   - Encapsulate Supabase queries in reusable hooks
   - Keep components clean and focused on UI

4. **Handle Errors Gracefully**
   - Always check for errors in Supabase responses
   - Show user-friendly error messages

5. **Type Safety**
   - Consider generating TypeScript types from your Supabase schema
   - Use proper TypeScript interfaces for your data

## Quick Testing

To verify your Supabase connection works:

```tsx
// Create a test component: src/app/test-supabase/page.tsx
'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export default function TestSupabase() {
  const [status, setStatus] = useState('Testing...');
  const supabase = createClient();

  useEffect(() => {
    async function test() {
      try {
        const { data, error } = await supabase
          .from('_test_')
          .select('*')
          .limit(1);
        
        if (error) {
          setStatus(`Connected! (Error is expected if no tables exist yet)`);
        } else {
          setStatus('Connected successfully!');
        }
      } catch (err) {
        setStatus('Connection failed: ' + err.message);
      }
    }
    
    test();
  }, [supabase]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Supabase Connection Test</h1>
      <p className="mt-4">{status}</p>
    </div>
  );
}
```

Visit `/test-supabase` to verify the connection.

## Next Steps

1. **Set up your database schema** in Supabase Dashboard → Table Editor
2. **Create your first table** (e.g., `posts`, `users`, etc.)
3. **Enable Row Level Security (RLS)** for production apps
4. **Use the examples above** to fetch and display data

## Resources

- [Supabase JavaScript Client Docs](https://supabase.com/docs/reference/javascript)
- [Next.js + Supabase Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Supabase Realtime](https://supabase.com/docs/guides/realtime)

---

**Note**: This is a quick reference for frontend development. Backend operations like using the service role key should be done in API routes or server actions for security.
