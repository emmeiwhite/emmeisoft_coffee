// App Functionality: As the user clicks on the location search button, a name is passed along and in return name.jpg is what it should return
function mapChooser(locationName){
    // return "sanatnagar.jpg";
    // Let's make our functionality more generic Now
    if(!locationName){
        
    }
    let imageName = `${locationName}.jpg`;
    return imageName;
}

export default mapChooser;