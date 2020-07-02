export async function getDino() {
  try {
    let response = await fetch('http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=2');
    let jsonifiedResponse;
    if(response.ok && response.status ==200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}