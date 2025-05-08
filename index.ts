{
    //
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper){
            return input.toUpperCase();
        }
        else if (toUpper === undefined) {
            return input.toUpperCase();
        }
        else {
            return input.toLowerCase()
        }
    }

    console.log(formatString("Hello"));          
    console.log(formatString("Hello", true));
    console.log(formatString("Hello", false));

    // 
}