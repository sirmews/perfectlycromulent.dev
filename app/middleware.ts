import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { getAnonymousId } from '@utils/identity'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from './types/supabase'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  setAnonymousId(req)
  supabaseAuth(req)
  return res
}

/**
 * Set an anonymous ID cookie if one does not exist.
 */
const setAnonymousId = (req: NextRequest): NextResponse => {
  const response = NextResponse.next()

  if (!req.cookies.has('anon_id')) {
    const anonId = getAnonymousId()

    response.cookies.set('anon_id', anonId)
    return response;
  }
  return response;
}

/**
 * Authenticate the user with Supabase.
 */
const supabaseAuth = async (req: NextRequest): Promise<NextResponse> => {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient<Database>({ req, res })
  await supabase.auth.getSession()
  return res;
}