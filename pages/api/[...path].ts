// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
import { API_BASE_URL } from 'utils';
type Data = {
  name: string;
};
export const config = {
  api: {
    bodyParser: false,
  },
};
const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  req.headers.cookie = '';
  proxy.web(req, res, {
    target: API_BASE_URL,
    changeOrigin: true,
    selfHandleResponse: false,
  });
  // res.status(200).json({ name: 'Match all here' });
}
