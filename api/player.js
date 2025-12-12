export default function handler(req, res) {
  const url = req.query.url || "";
  if (!url) return res.status(400).json({ error: "Missing url parameter" });
  res.status(200).json({ success: true, stream: url });
}
