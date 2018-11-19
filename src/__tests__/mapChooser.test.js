// We'll simply fail the test first
import mapChooser from './../mapChooser'; 

// Trying to import the functionality to be tested ! Initially it doesn't exist as we first write our test based on the functinality

describe("mapChooser",()=>{
    it("For sanatnagar name, return sanatnagar.jpg",()=>{
        let expected = "sanatnagar.jpg";

        let actual = mapChooser("sanatnagar");
    
        // assert
    
        expect(actual).toEqual(expected);
    })
  
})