// /src/app/api/products.ts

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler() {
  try {
    const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_REVALIDATION_SECRET;
    const shopName = 'bbe80e-3';

    const response = await axios.get(`/admin/api/2020-04/products.json?limit=20`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
    });
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
