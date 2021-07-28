// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import mercadopago from 'mercadopago';
import { CreatePreferencePayload } from 'mercadopago/models/preferences/create-payload.model';
import { PreferenceCreateResponse } from 'mercadopago/resources/preferences';

const accessToken = process.env.ACCESS_TOKEN_MP || '';

mercadopago.configurations.setAccessToken(accessToken);

type Data = {
  id: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const preference: CreatePreferencePayload = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        },
      ],
      back_urls: {
        success: `${req.headers.origin}/api/feedback`,
        failure: `${req.headers.origin}/api/feedback`,
        pending: `${req.headers.origin}/api/feedback`,
      },
      auto_return: 'approved',
    };
    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ id: response.body.id });
  } catch (error) {
    console.log(error);
  }
};

export default handler;
