import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis'

const redis = new Redis({
    url: process.env.NEXT_SECRET_UPSTASH_REDIS_URL,
    token: process.env.NEXT_SECRET_UPSTASH_REDIS_TOKEN,
});

export async function GET() {
    let views = await redis.get('views');
    if (typeof views !== 'number') {
        await redis.set('views', 200);
        views = 200;
    }
    return NextResponse.json({ views });
}

export async function POST() {
    let views = await redis.incr('views');
    if (typeof views !== 'number') {
        await redis.set('views', 200);
        views = 200;
    }
    return NextResponse.json({ views });
}
