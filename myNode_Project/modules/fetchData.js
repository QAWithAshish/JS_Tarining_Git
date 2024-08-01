
const fetch = (await import("node-fetch")).default;

export async function getDataFromAPI(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      console.log(data);
    } catch {
      console.error("Data was not fetched ", error);
    }
  }