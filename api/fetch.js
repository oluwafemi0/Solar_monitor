

// Function to fetch data from the Solcast API
import axios from 'axios';

const fetchData = async (setData, setLoading) => {
  const API_KEY = 'n6_rfVp1FwrBnxBM7Ji_vWkOhQe_EVIX';
  const API_ENDPOINT = 'https://api.solcast.com.au/rooftop_sites/a6e2-f1f0-f2f6-8e8a/estimated_actuals?format=json';

  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setData(response.data);
    setLoading(false);
  } catch (error) {
    // Handle errors
    setLoading(false);
  }
};

export default fetchData;
