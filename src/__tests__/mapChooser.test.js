// We'll simply fail the test first
import mapChooser from './../mapChooser'; 

// trying to import the functionality to be tested ! Initially it doesn't exist as we first write our test based on the functinality

describe("mapChooser",()=>{
    let expected = "sanatnagar.jpg";

    let actual = mapChooser("sanatnagar");

    // assert

    expect(actual).toEqual(expected);
})