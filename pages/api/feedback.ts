// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface FeedbackBody {
  Payment: string | string[];
  Status: string | string[];
  MerchantOrder: string | string[];
}

const handler = (req: NextApiRequest, res: NextApiResponse<FeedbackBody>) =>
  res.status(200).json({
    Payment: req.query.payment_id,
    Status: req.query.status,
    MerchantOrder: req.query.merchant_order_id,
  });

export default handler;
