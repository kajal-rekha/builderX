import { deleteBuilder, getBuilder, updateBuilder } from "@/controllers/builderController";
import { connectDB } from "@/lib/db";


export default async function handler(req, res) {
    await connectDB();

    if (req.method === "GET") {
        return getBuilder(req, res);
    } else if (req.method === "PUT") {
        return updateBuilder(req, res);
    } else if (req.method === "DELETE") {
        return deleteBuilder(req, res);
    } else {
        res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
        return res
            .status(405)
            .json({ error: `Method ${req.method} not allowed` });
    }
}
