(function($){
    var 
        stepOne = function(){
            if (null !== $('div[aria-label="Conversation actions"]')) {
                $('div[aria-label="Conversation actions"]').click();
                setTimeout(stepTwo, 200);
            } else {
                console.log('There are no messages to delete');
            }
        },
        stepTwo = function(){
            var elements = document.evaluate('//span[text()="Delete"]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            for (var i = 0; i < elements.snapshotLength; i++) {
                elements.snapshotItem(i).click();
            }
            setTimeout(stepThree, 200);
        },
        stepThree = function(){
            setTimeout(document.querySelector("body > div._10._4ebx.uiLayer._4-hy._3qw > div._59s7 > div > div > div > div > div > div._4eb_ > div > div._ohf.rfloat > div > span:nth-child(2) > button").click())
            if (null !== $('div[aria-label="Conversation actions"]')) {
                setTimeout(stepOne, 600);
            } else {
                console.log('No more messages to delete');
            }
        };
    
    console.log('Deleting all Facebook messages - By: Matthew Dunham');
    stepOne();
})(function(sel){ return document.querySelector(sel); });
