let currentStatus = "0";

export default function handler(req, res) {
  if (req.query.value) {
    currentStatus = req.query.value;
  }
  res.json({ status: currentStatus });
}
