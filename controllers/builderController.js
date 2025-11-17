import Builder from "@/models/Builder";

// ======= Create Builder ======= //
export const createBuilder = async (req, res) => {
    try {
        const { user_id, components, projectName } = req.body;

        const builder = await Builder.create({
            user_id,
            components,
            projectName,
        });

        res.status(201).json({ builder });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Get All Builders  ======= //
export const getBuilders = async (req, res) => {
    try {
        const userId = req.user._id;
        const builders = await Builder.find({ user_id: userId });
        res.status(200).json({ builders });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Get A Builder ======= //
export const getBuilder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id: projectId } = req.query;

        const builder = await Builder.findOne({
            _id: projectId,
            user_id: userId,
        });
        if (!builder) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json(builder);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Update Builder  ======= //
export const updateBuilder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id: projectId } = req.query;

        const updated = await Builder.findOneAndUpdate(
            { _id: projectId, user_id: userId },
            req.body,
            { new: true }
        );

        if (!updated) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ======= Delete Builder ======= //
export const deleteBuilder = async (req, res) => {
    try {
        const userId = req.user._id;
        const { id: projectId } = req.query;

        const deleted = await Builder.findOneAndDelete({
            _id: projectId,
            user_id: userId,
        });

        if (!deleted) {
            return res
                .status(404)
                .json({ message: "Project not found or not authorized" });
        }

        res.status(200).json({ message: "Project deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
