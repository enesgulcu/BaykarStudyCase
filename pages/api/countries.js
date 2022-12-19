import axios from 'axios';
export default async function handler(req, res) {

    const { method, query:{id} } = req;

    if (method === 'GET') {

        try {
            await axios('https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,languages,borders,population,flags')
            .then((response) => {
            return res.status(200).json(response.data);
            }) 
        }
        catch (err) {
        console.log(err);
        }        
    } 
    
    else {
        res.status(405).json({ message: 'Method not allowed' });
    }
  }