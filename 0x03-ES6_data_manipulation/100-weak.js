// Initialize a WeakMap to store endpoint query counts
const weakMap = new WeakMap();

// Function to query the API endpoint
function queryAPI(endpoint) {
  // Check if endpoint has been queried before
  if (weakMap.has(endpoint)) {
    let count = weakMap.get(endpoint);
    count++;
    weakMap.set(endpoint, count);

    // Check if count exceeds 5, throw an error
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  } else {
    // If endpoint is queried for the first time, initialize count to 1
    weakMap.set(endpoint, 1);
  }
}

export { queryAPI, weakMap };
