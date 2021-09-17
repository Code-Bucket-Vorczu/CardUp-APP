
const statusMsg = [{
    status: 400,
    msg: 'Bad Reguest',
    clientMsg: 'PAN DEVELOPER SIE NIE POSTARAŁ!',
    clientMsgLong: 'Developer był zbyt śpiący, głupi albo leniwy aby napisać to zapytanie poprawnie'
},
{
    status: 401,
    msg: 'Unauthorized',
    clientMsg: 'PAN DEVELOPER NIE DOSTAŁ KLUCZY DO TEGO POMIESZCZENIA!',
    clientMsgLong: 'Kim jesteś i jak się tu dostałeś ?!'
},
{
    status: 403,
    msg: 'Forbidden',
    clientMsg: 'PAN DEVELOPER NIE DOSTAŁ KLUCZY DO TEGO POMIESZCZENIA!',
    clientMsgLong: 'Nie wszędzie mamy dostęp.'
},
{
    status: 404,
    msg: 'Not Found',
    clientMsg: 'JAKI TO GRACZ WARIACIE?!?!',
    clientMsgLong: 'Nie mam pojęcia kogo szukasz.'
},
{
    status: 408,
    msg: 'Request Timeout',
    clientMsg: 'TRWAŁO TYLE CO ZAMIATANIE DUSTA2',
    clientMsgLong: 'Coś jest nei tak, nasza alpikacja jest uber szybka a tu lipa'
},
]


const statusSinffer = statusCode =>{
    return statusMsg.filter(x => x.status == statusCode)
}

export { statusSinffer };



