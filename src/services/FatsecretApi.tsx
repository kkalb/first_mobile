import { Buffer } from 'buffer';

const getToken = async (): Promise<any> => {
  try {
    const clientId = process.env.EXPO_PUBLIC_CLIENT_ID;
    const clientSecret = process.env.EXPO_PUBLIC_CLIENT_SECRET;
    // console.log(clientId);
    // console.log(clientSecret);
    const response = await fetch('https://oauth.fatsecret.com/connect/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`,
        ).toString('base64')}`,
      },
      body: 'grant_type=client_credentials&scope=basic',
    });
    const json = await response.json();
    return json;
  } catch (error) {
    // console.error('getToken');
    // console.error(error);
    return '';
  }
};

// {
//   "foods": {
//     "food": [
//       {
//         "food_description": "Per 100g - Calories: 147kcal | Fat: 9.94g | Carbs: 0.77g | Protein: 12.58g",
//         "food_id": "3092",
//         "food_name": "Egg",
//         "food_type": "Generic",
//         "food_url": "https://www.fatsecret.com/calories-nutrition/generic/egg-whole-raw"
//       },
//       ...
//     ],
//     "max_results": "20",
//     "page_number": "0",
//     "total_results": "2008"
//   }
// }

const searchFood = async (
  textInput: string,
  access_token: string,
): Promise<any> => {
  try {
    // console.log(`using token: ${accessToken.access_token}`);
    const response = await fetch(
      `https://platform.fatsecret.com/rest/foods/search/v1?search_expression=${textInput}&format=json`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('getToken');
    console.error(error);
    return '';
  }
};

export { getToken, searchFood };
