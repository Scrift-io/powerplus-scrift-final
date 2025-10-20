export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxIO2QaPPprRQ9hdQF76VCnF7oAc5gFPKoidKvDZ5cLRc3FJWkBm3-A_1JRqRdFVtwj/exec';

  try {
    const googleResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    const data = await googleResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ result: 'error', error: error.message });
  }
}
