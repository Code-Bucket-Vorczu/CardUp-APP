
const statusMsg = [{
    code: 'pl',
    name: 'Polska',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg',
}

]


const countrySinffer = flagCode =>{
    return statusMsg.find(x => x.code === flagCode)
}

export { countrySinffer };
