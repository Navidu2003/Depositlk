import { NextResponse } from 'next/server';
import client from 'prom-client';

// Register එක නැවත නැවත initialize වීම වැළැක්වීම
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

export async function GET() {
  const metrics = await client.register.metrics();
  return new NextResponse(metrics, {
    headers: {
      'Content-Type': client.register.contentType,
    },
  });
}