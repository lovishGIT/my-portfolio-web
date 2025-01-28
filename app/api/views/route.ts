import { NextResponse } from 'next/server';

let viewCount: number = 128;

export async function GET() {
    return NextResponse.json({ views: viewCount });
}

export async function POST() {
    viewCount += 1;
    return NextResponse.json({ views: viewCount });
}
