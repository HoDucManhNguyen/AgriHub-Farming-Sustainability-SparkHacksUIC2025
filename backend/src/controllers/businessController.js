import axios from 'axios';

const JSON_SERVER_URL = 'http://localhost:3002/businesses';

export const businessController = {
    async getAllBusinesses(req, res) {
        try {
            const response = await axios.get(JSON_SERVER_URL);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getBusinessById(req, res) {
        try {
            const { id } = req.params;
            const response = await axios.get(`${JSON_SERVER_URL}/${id}`);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createBusiness(req, res) {
        try {
            const newBusiness = req.body;
            const response = await axios.post(JSON_SERVER_URL, newBusiness);
            res.status(201).json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateBusiness(req, res) {
        try {
            const { id } = req.params;
            const updatedBusiness = req.body;
            const response = await axios.put(`${JSON_SERVER_URL}/${id}`, updatedBusiness);
            res.json(response.data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteBusiness(req, res) {
        try {
            const { id } = req.params;
            await axios.delete(`${JSON_SERVER_URL}/${id}`);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};
