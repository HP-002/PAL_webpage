let dates = ['February 7', 'February 10', 'February 14', 'February 17', 'February 21 - Exam 1 Review', 'February 24', 'February 28', 'March 3', 'March 7', 'March 10', 'March 14', 'March 24', 'March 28', 'March 31', 'April 4 - Exam 2 Review', 'April 7', 'April 11', 'April 14', 'April 18', 'April 21', 'April 25', 'April 28', 'May 2', 'May 5', 'May 9', 'May 12 - Exam 3 Review'];
let sessions = [];

document.addEventListener('DOMContentLoaded', async function() {
    await readSessions();
    addSessions();
});

async function fileExists(filePath) {
    console.log(filePath);
    try {
        const response = await fetch(filePath, { method: 'HEAD' });
        return response.ok;
    } catch (error) {
        
        return false;
    }
}

async function readSessions() {
    let name = 'WS - ';
    
    for (let i = 2; i < dates.length + 2; i++) {
        let filepath = 'worksheets/' + name + i + '.pdf';
        if(await fileExists(filepath)) {
            let solutionPath = 'solutions/' + name + i + ' Solutions.pdf';
            createSession(dates[i-2], filepath, solutionPath);
        } else {
            break;
        }
    }

    return;
}

function createSession(date, file, solution) {
    let session = document.createElement('div');
    session.className = 'session';
    
    let sessionDetails = document.createElement('div');
    sessionDetails.className = 'session-details';
    sessionDetails.textContent = date;

    let ws = document.createElement('div');
    ws.className = 'ws';

    let blankWS = document.createElement('a');
    blankWS.className = 'ws blank';
    blankWS.href = file;
    blankWS.textContent = 'Blank WS';

    let solutionWS = document.createElement('a');
    solutionWS.className = 'ws solution';
    solutionWS.href = solution;
    solutionWS.textContent = 'Solution';

    ws.appendChild(blankWS);
    ws.appendChild(solutionWS);

    session.appendChild(sessionDetails);
    session.appendChild(ws);

    sessions.push(session);
}

function addSessions() {
    let container = document.getElementsByClassName('ws-container')[0];
    for (let i = 0; i < sessions.length; i++) {
        container.appendChild(sessions[i]);
    }
}