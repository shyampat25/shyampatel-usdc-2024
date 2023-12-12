/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };
    scannedTextObj.forEach((book) => {
        book["Content"].forEach((content) => {
            if(content["Text"].includes(searchTerm)){
                subResult = {
                    "ISBN": book["ISBN"],
                    "Page": content["Page"],
                    "Line": content["Line"]
                };
                result["Results"].push(subResult);
            }
        });
    });
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}
const appleBookIn = [
    {
        "Title": "A Book About Apples",
        "ISBN": "00000000001",
        "Content": [
            {
                "Page": 1,
                "Line": 8,
                "Text": "apples are a terrific fruit. they can be many colors "
            },
            {
                "Page": 1,
                "Line": 9,
                "Text": "and are quite popular among children "
            },
            {
                "Page": 2,
                "Line": 10,
                "Text": "a dish made of the fruit is applesauce"
            } ,
            {
                "Page": 3,
                "Line": 4,
                "Text": "let's try random caps: Apple APPLE aPPlE applEs"
            },
            {
                "Page": 3,
                "Line": 10,
                "Text": "what a majectic fruit the pear is, oh wait that is not an apple"
            } ,
            {
                "Page": 4,
                "Line": 1,
                "Text": "now let's try the word with spaces a p p l e"
            } 
        ] 
    }
]

const apple3Out = {
    "SearchTerm": "apple",
    "Results": [
        {
            "ISBN": "00000000001",
            "Page": 1,
            "Line": 8
        },
        {
            "ISBN": "00000000001",
            "Page": 2,
            "Line": 10
        },
        {
            "ISBN": "00000000001",
            "Page": 3,
            "Line": 10
        },
    ]
}

const apple4Out =  {
    "SearchTerm": "let's try",
    "Results": [
        {
            "ISBN": "00000000001",
            "Page": 3,
            "Line": 4
        },
        {
            "ISBN": "00000000001",
            "Page": 4,
            "Line": 1
        }
    ]
}

const applesAndLeaguesOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "00000000001",
            "Page": 1,
            "Line": 9
        },
        {
            "ISBN": "00000000001",
            "Page": 3,
            "Line": 4
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]

}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/* Test 3: General function test, includes case-sensitive cases */
const test3Result = findSearchTermInBooks("apple", appleBookIn);
if(JSON.stringify(apple3Out) === JSON.stringify(test3Result)){
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", apple3Out);
    console.log("Received:", test3Result);
}

/* Test 4: Multiple word test */
const test4Result = findSearchTermInBooks("let's try", appleBookIn);
if(JSON.stringify(apple4Out) === JSON.stringify(test4Result)){
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", apple4Out);
    console.log("Received:", test4Result);
}

/* Test 5: No matches test with some input */ 
const test5Result = findSearchTermInBooks("orange", appleBookIn);
if(test5Result.Results.length == 0){
    console.log("PASS: Test 5")
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", JSON.stringify({"SearchTerm": "orange",
    "Results": []}));
    console.log("Received:", test5Result);
}

/* Test 6: Multiple books general test*/
const test6Result = findSearchTermInBooks("and", [appleBookIn[0], twentyLeaguesIn[0]]);
if(JSON.stringify(applesAndLeaguesOut) === JSON.stringify(test6Result)){
    console.log("PASS: Test 6")
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", applesAndLeaguesOut);
    console.log("Received:", test6Result);
}

/* Test 7: Empty Book */
const test7Result = findSearchTermInBooks("a", []);
if(test7Result.Results.length == 0){
    console.log("PASS: Test 7")
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", JSON.stringify({"SearchTerm": "a",
    "Results": []}));
    console.log("Received:", test7Result);
}