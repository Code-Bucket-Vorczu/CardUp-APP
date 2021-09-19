
const statusMsg = [{
    code: 'pl',
    name: 'Polska',
    name_faceit: 'Poland',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/pl.svg',
},
{
    code: 'de',
    name: 'Niemcy',
    name_faceit: 'Germany',
    flagUrl: 'https://lipis.github.io/flag-icon-css/flags/4x3/de.svg',
}

]


const countrySinffer = flagCode =>{
    return statusMsg.find(x => x.code === flagCode)
}

export { countrySinffer };
