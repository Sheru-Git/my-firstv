export default function handler(req, res) {
  const url = req.query.url;

  // Agar url nahi diya
  if (!url) {
    return res.status(400).json({
      success: false,
      message: "Missing 'url' parameter. Example: /api/player?url=YOUR_LINK"
    });
  }

  // Simple ClassPlus-style response
  return res.status(200).json({
    success: true,
    original_url: url,
    playable_url: url,
    message: "URL received successfully"
  });
}
