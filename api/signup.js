export default async (req, res) => {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const { name, email } = req.body;
  
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
  
    // Example: Save data to console (or database)
    console.log(`New signup received: ${name} - ${email}`);
  
    // Return success response
    return res.status(200).json({ message: 'Thank you for signing up!' });
  };
  