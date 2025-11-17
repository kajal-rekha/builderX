import { createBuilder, getBuilders } from "@/controllers/builderController";
import { connectDB } from "@/lib/db";

export default async function handler(req, res) {
    await connectDB();

    if (req.method === "POST") {
        return createBuilder(req, res);
    } else if (req.method === "GET") {
        return getBuilders(req, res);
    } else {
        res.setHeader("Allow", ["GET", "POST"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
