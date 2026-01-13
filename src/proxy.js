// src/proxy.js
import { NextResponse } from 'next/server';

export function proxy(request) {
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /mobile/i.test(ua);
  
  const response = NextResponse.next();
  
  // Truyền thông tin xuống Page qua Header
  response.headers.set('x-device-type', isMobile ? 'Mobile' : 'Desktop');
  response.headers.set('x-user-agent', ua);
  
  return response;
}
