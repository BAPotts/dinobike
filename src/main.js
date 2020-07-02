import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { getDino } from './dinosaur-service.js';

async function getDinoWords() {
  const apiResponse = await getDino();
  if(!apiResponse) {
    $("#display").html('<p>Something Went Wrong!</p>');
  } else {
    $("#display").html(apiResponse);
  }
}
    

$(document).ready(function() {
  $('#get-dino').click(function() {
    getDinoWords();
  });
});