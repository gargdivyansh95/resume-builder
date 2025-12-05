import { NextResponse } from 'next/server';
import apiInstance from '@/config/axios';

export async function POST(request) {
    try {
        const body = await request.json();
        const response = await apiInstance.post('/auth/login', body);
        return NextResponse.json(
            { success: true, data: response.data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Login API Error:', error);
        const status = error.response?.status || 500;
        const message = error.response?.data?.message || 'Internal server error';
        return NextResponse.json(
            { success: false, error: message },
            { status }
        );
    }
}
