Object.keys(g_oPlayer.oAss.oItems).forEach(key => {
    const question = g_oPlayer.oAss.oItems[key];

    let message = "*** Вопрос: " + question.sQuestionText;

    const items = question?.jxVars;
    
    for(let i = 0; i < items.length; i++) {
        const item = items[i];
        const answer = item.attributes?.getNamedItem('ws_right').textContent == '1' ? "[+]" : "[-]";
        message += "\n " + answer  + " ["+ (i + 1) + "] " + item.textContent;
    }

    console.log(message);
});
