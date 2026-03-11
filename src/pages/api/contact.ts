import { addContact } from "../../../backend/backend.mjs";

export async function POST({ request }: { request: Request }) {
    try {
        const data = await request.json();
        await addContact(data);
        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        console.error("Error saving contact", err);
        return new Response(JSON.stringify({ success: false, error: err?.message ?? String(err) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}

export function GET() {
    return new Response(JSON.stringify({ message: "Contact API" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
    });
}
