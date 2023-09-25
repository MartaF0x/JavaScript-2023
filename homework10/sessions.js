let jsonSessions = localStorage.getItem('sessions');
let sessions = jsonSessions ? JSON.parse(jsonSessions) : [];
let sessionsBox = document.createElement('div');
document.body.appendChild(sessionsBox);

for (const session of sessions) {
    let sessionInfo = document.createElement('p');
    sessionInfo.innerText = session;
    sessionsBox.appendChild(sessionInfo);
}