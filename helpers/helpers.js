import axios from 'axios';
import get from 'lodash.get';

export const fetchData = ({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  headers,
}) => {
  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

  // axios default configs
  //   axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL || '';
  axios.defaults.headers.common['Content-Type'] = 'application/json';

  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data,
    })
    .then(({ data }) => {
      onSuccess && onSuccess(data);
    })
    .catch((error) => {
      onFailure && onFailure(error);
      console.info('error', error);
    })
    .then(() => {});
};

export const normalizeLaunchData = data => {
    try {
        if (!data || !Array.isArray(data)) return [];
        return data.map(launch => ({
            mission_id: launch.mission_id || [],
            launch_year:launch.launch_year,
            launch_success: launch.launch_success,
            mission_name: launch.mission_name,
            display_name: launch.mission_name + ' #' + launch.flight_number,
            article_link: get(launch, 'links.article_link'),
            mission_patch_small: get(launch, 'links.mission_patch_small'),
            land_success: get(launch, 'rocket.first_stage.cores[0].land_success')
        })) 
    }
    catch (err) {
        return [];
    }
}