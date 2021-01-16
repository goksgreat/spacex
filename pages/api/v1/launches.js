import { fetchData, normalizeLaunchData } from '../../../helpers/helpers';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        fetchData({
            url: `${process.env.NEXT_PUBLIC_API_URL}/launches`,
            data: req.body,
            onSuccess: (data) => res.status(200).json(normalizeLaunchData(data)),
            onFailure: (err) => res.status(500).json(err),
          });
      } else {
        res.status(200).json({ error: 'GET Not Supported for this method'})
      }
  }