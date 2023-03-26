export function showError(error) {
  var err_text;
  var err_status = "failed";

  switch (error.code) {
    case error.PERMISSION_DENIED:
      err_text = "User denied the request for Geolocation";
      alert("Please Refresh This Page and Allow Location Permission...");
      break;
    case error.POSITION_UNAVAILABLE:
      err_text = "Location information is unavailable";
      break;
    case error.TIMEOUT:
      err_text = "The request to get user location timed out";
      alert("Please Set Your Location Mode on High Accuracy...");
      break;
    case error.UNKNOWN_ERROR:
      err_text = "An unknown error occurred";
      break;
    default:
      console.log("default");
      break;
  }
}
