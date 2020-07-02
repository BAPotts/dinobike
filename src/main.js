import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { getDino } from './src/dinosaur-service';

async function getDinoWords() {
  const apiResponse = await getDino();
  if(!apiResponse) {
    $(".display").html('<p>Something Went Wrong!</p>');
  } else {
    $('.display').text(apiResponse);
  }
}
    

$(document).ready(function() {
  getDinoWords();
});