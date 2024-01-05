module.exports = generateStruct = (cards) => {
    console.log(cards);
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
            }
            #root {
                width: 95%;
                background-color: green;
                margin: auto;
                height: 65vh;
                margin-bottom: 10px;
            }
            footer {
                height: 10vh;
                width: 95%;
                margin: auto;
                background-color: green;
            }
        </style>
    
        <!-- title header -->
        <header>Team Profile Viewer</header>
    
        <!-- Team viewer root div -->
        <div id="root">
            ${cards.map(() => {})}
        </div>
    
        <!-- Footer display -->
        <footer></footer>
        
        <!-- Custom Script -->
        <script></script>
    </body>
    </html>
    `
}