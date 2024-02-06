const fetchData = async () => {
  const settledResponse = await fetch("https://api.metacamp.so/learn/courses");
  const jsonResponse = await settledResponse.json();
  console.log(jsonResponse);
};

fetchData();

const fetchdata2 = asyn () => {
  try{
  const settledResponse = await fetch("https://api.metacamp.so/learn/courses");
  const jsonResponse = await settledResponse.json();
  console.log(jsonResponse);
  }catch(err) {
    console.log("An error has occured");
  }
}