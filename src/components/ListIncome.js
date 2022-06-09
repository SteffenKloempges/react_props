import IncomeItem from './IncomeItem';

let overview = [
    {
        id: 0,
        name: 'Gehalt',
        betrag: 1000,
        date: '01.06.2022',
        isIncome: true
    },
    {
        id: 1,
        name: 'Miete',
        betrag: 300,
        date: '02.06.2022',
        isIncome: false
    },
    {
        id: 2,
        name: 'Internet',
        betrag: 50,
        date: '04.06.2022',
        isIncome: false
    }
]


const ListIncome = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Ein/Ausgabe</th>
                    <th>Betrag</th>
                    <th>Datum</th>
                </tr>
            </thead>
            <tbody>
                {overview.map((elt) =>
                    <IncomeItem
                        key={elt.id}
                        name={elt.name}
                        betrag={elt.betrag}
                        date={elt.date}
                        isIncome={elt.isIncome}
                    />
                )}
            </tbody>
        </table>
    );
}

export default ListIncome;