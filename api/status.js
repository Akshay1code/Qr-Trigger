export default function handler(req, res) {
  if (!global.status) {
    global.status = "0";
  }

  if (req.query.value !== undefined) {
    global.status = req.query.value;
  }

  res.status(200).json({ status: global.status });
}
