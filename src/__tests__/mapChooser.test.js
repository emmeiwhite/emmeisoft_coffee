// We'll simply fail the test first
import mapChooser from './../mapChooser'; 

// Trying to import the functionality to be tested ! Initially it doesn't exist as we first write our test based on the functinality

describe("mapChooser",()=>{
    it("Returns an image based on input given to it",()=>{
        let expected = "sanatnagar.jpg";

        let actual = mapChooser("sanatnagar");
    
        // assert
    
        expect(actual).toEqual(expected);
    })
  
    it("Returns a default image when no input is given to it",()=>{
        let expected = "default.jpg";

        let actual = mapChooser("default");
    
        // assert
    
        expect(actual).toEqual(expected);
    })

})