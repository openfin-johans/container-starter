import { fin } from 'openfin-adapter/src/mock';

function populatePreventedViews(views) {
    views.forEach(view => {
        const viewP = document.createElement('p');
        viewP.innerHTML = view.name;
        document.querySelector('#views').appendChild(viewP);
    });
}

function populate() {
    const params = new URLSearchParams(window.location.search);
    const closeType = params.get('closeType');

    if (closeType === 'view') {
        const p = document.createElement('p');
        p.innerHTML = 'Are you sure you want to close this view? It may have unsaved changes.';
        document.querySelector('#text').appendChild(p);
    }

    if (closeType === 'window') {
        const views = JSON.parse(params.get('views')).views;

        const p1 = document.createElement('p');
        p1.innerHTML = 'Are you sure you want to close this window?';
        document.querySelector('#text').appendChild(p1);

        const p2 = document.createElement('p');
        p2.innerHTML = 'The following views may have unsaved changes:';
        document.querySelector('#text').appendChild(p2);

        populatePreventedViews(views);
    }
}

async function handleClose(userDecision) {
    try {
        await fin.InterApplicationBus.publish('user-decision', userDecision);
        window.close();
    } catch (error) {
        console.log(error);
    }  
}

document.addEventListener('DOMContentLoaded', async () => {
    const okay = document.getElementById('okay');
    const cancel = document.getElementById('cancel');

    okay.addEventListener('click', () => {
        handleClose(true);
    });
    
    cancel.addEventListener('click', () => {
        handleClose(false);
    });

    populate();

    const rect = document.body.getBoundingClientRect();
    const bounds = await fin.me.getBounds();

    fin.me.setBounds({
        width: bounds.width,
        top: bounds.top,
        left: bounds.left,
        height: Math.round(rect.height) + 40
    });
});