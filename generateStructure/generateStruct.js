module.exports = generateStruct = (cards) => {
    const cardList = cards.map(card => card);
    const cardString = cardList.join('');
    // return html file structure, will need debugging
    return `

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Viewer</title>
    </head>
    
    <body>
        <!-- Custom style -->
        <style>
            body {
                margin: 0;
                padding: 2.4%;
                box-sizing: border-box;
            }
            header {
                width: 95%;
                height: 10vh;
                margin: auto;
                background-color: green;
                color: white;
                font-size: 2rem;
                padding-top: 10px;
                text-align: center;
                margin-bottom: 10px;
                position: fixed;
            }
            #root {
                width: 95%;
                padding: 10px;
                background-color: green;
                margin: auto;
                height: auto;
                margin-bottom: 15vh;
                margin-top: 15vh;
            }
            .card {
                display: flex;
                text-align: center;
                flex-direction: column;
                border: 2px solid black;
                width: 300px;
                margin: auto;
                margin-top: 15px;
            }
            .card > h1 {
                font-size: 1rem;
            }
            .card > h3 {
                font-size: 0.8rem;
            }
            footer {
                position: fixed;
                height: 10vh;
                width: 95%;
                margin: auto;
                bottom: 0;
                background-color: green;
            }
        </style>
    
        <!-- title header -->
        <header>Team Profile Viewer</header>
    
        <!-- Team viewer root div -->
        <div id="root">
            ${cardString}    
        </div>
    
        <!-- Footer display -->
        <footer></footer>
        
        <!-- Custom Script -->
        <script></script>
    </body>
    </html>
    
    `
}