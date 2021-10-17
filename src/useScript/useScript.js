import useAsync from '../useAsync/useAsync';
import PropTypes from 'prop-types';

function useScript(url) {
  return useAsync(() => {
    const script = document.createElement('script');
    script.src = url;
    script.async = true;

    return new Promise((resolve, reject) => {
      script.addEventListener('load', resolve);
      script.addEventListener('error', reject);
      document.body.appendChild(script);
    });
  });
}

export default useScript;
useScript.propTypes = {
  url: PropTypes.string,
};
