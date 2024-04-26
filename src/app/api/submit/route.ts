import { google } from 'googleapis';
import { env } from "../../../../env";

type SheetForm = {
    name: string,
    phone: string,
    email: string,
    message: string
}

export async function POST(
    req: Request,
    res: Response
) {
    if (req.method !== 'POST') {
        return Response.json({ message: 'Only POST requests are allowed', status: 405 })
    }

    const { name, phone, email, message }: SheetForm = await req.json();

    try {
        //prepare auth
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: env.GOOGLE_CLIENT_EMAIL,
                private_key: env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets',
            ]
        })

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: env.GOOGLE_SHEET_ID,
            range: 'A1:F1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    ['Pending', new Date().toLocaleString('en-US', { timeZone: 'Asia/Riyadh' }), name, phone, email, message]
                ]
            }
        })

        return Response.json({ data: response.data, status: 200 });

    } catch (error: any) {
        console.error('Error calling Google Sheets API:', error);
        return Response.json({ message: 'Failed to update spreadsheet', status: 500 });
    }
}


