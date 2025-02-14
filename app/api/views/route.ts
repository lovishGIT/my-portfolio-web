import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), '/me/views.json');

export async function GET() {
    const data = await fs.readFile(filePath, 'utf-8');
    const { views } = JSON.parse(data);
    return NextResponse.json({ views });
}

export async function POST() {
    const data = await fs.readFile(filePath, 'utf-8');
    const json = JSON.parse(data);
    json.views += 1;

    await fs.writeFile(filePath, JSON.stringify(json, null, 2));
    return NextResponse.json({ views: json.views });
}
