const projects = [
    {
        emoji: "\ud83d\ude48",
        webLink: "",
        description: "",
        gitHubLink: ""

    },
    {
        emoji: "",
        webLink: "",
        description: "",
        gitHubLink: ""

    }


];





//test to make sure you can inject emojis
let emojiAttempt = document.createElement("p");
emojiAttempt.textContent = `\ud83d\ude48`;

let projectTry = document.querySelector("#projects");
projectTry.appendChild(emojiAttempt);