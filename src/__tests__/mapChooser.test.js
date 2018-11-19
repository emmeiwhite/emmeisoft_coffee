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
  
    it("For rajbag name, return rajbag.jpg",()=>{
        let expected = "rajbag.jpg";

        let actual = mapChooser("rajbag");
    
        // assert
    
        expect(actual).toEqual(expected);
    })

    it("For default name, return default.jpg",()=>{
        let expected = "default.jpg";

        let actual = mapChooser("default");
    
        // assert
    
        expect(actual).toEqual(expected);
    })


})