// backend/src/controllers/formController.js
export const formController = {
    async handleFormSubmission(req, res) {
        try {
            const { city, county, state } = req.body;
            console.log(req)
            // Process the form data here
            console.log(`Received form data: City - ${city}, County - ${county}, State - ${state}`);
            res.json({ message: 'Form data received successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};