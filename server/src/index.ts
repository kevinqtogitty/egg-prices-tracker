import express, { json, Request, Response } from 'express';
import csvParser from 'csv-parser';
import cheerio from 'cheerio';
import axios from 'axios';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(json());

const url = 'https://www.globalproductprices.com/rankings/egg_prices/';

app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Please Like the Video!' });
});

app.get('/csv', (req: Request, res: Response): void => {
  const result: any[] = [];

  fs.createReadStream('./public/docs/eggs.csv')
    .pipe(csvParser())
    .on('data', (data) => {
      result.push({
        date: data.DATE,
        price: Number(data.APU0000708111).toFixed(2)
      });
    })
    .on('end', () => {
      res.json(result);
    });
});

app.get('/eggs', async (req: Request, res: Response) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const countries: { country: string; price: number }[] = [];
    $('tr', data).each((_, item) => {
      const country = $(item).find('a').text();
      const price = Number($(item).find('td:nth-child(2)').text().slice(0, 4));

      if (country) countries.push({ country: country, price: price });
    });
    res.json(countries);
  } catch (error) {
    console.log(error);
  }
});

app.listen('3001', (): void => {
  console.log('Server Running!');
});
