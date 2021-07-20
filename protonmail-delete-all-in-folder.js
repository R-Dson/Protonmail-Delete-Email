function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function deleteAllMails(){
    for (var i = 0;i<100;i++){
        setTimeout(function(){document.getElementById("idSelectAll").click()},1000);
        setTimeout(function(){document.querySelectorAll("[data-testid=\"toolbar:movetotrash\"]")[0].click()}, 3000);
        await sleep(10000)
    }
}

deleteAllMails()
