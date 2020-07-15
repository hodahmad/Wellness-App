const api_url = 'https://www.googleapis.com/youtube/v3/search';

        async function getData() {
            const response = await fetch(api_url);
            const data = await response.json();
            document.getElementById('yogaSearch').inputContent = data.message;
        }

        getData(); 

  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */

// https://developers.google.com/youtube/v3/getting-started
