function get_sutta_json(sutta) {
    //TODO: FIX THIS
    const url = 'https://api.example.com/data'; // Replace with your API endpoint

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); // Process the retrieved data
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
}

module.exports = get_sutta_json