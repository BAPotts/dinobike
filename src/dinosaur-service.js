export async function getDino() {
  try {
    let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=html&paragraphs=3&words=15');
    let jsonifiedResponse;
    if(response.ok && response.status ==200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    console.log(error)
    return false;
  }
}