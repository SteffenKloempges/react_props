const IncomeItem = (props) => {
    return (
        <tr style={{ color: props.isIncome ? 'green' : 'tomato' }}>
            <td>{props.name}</td>
            <td>{props.betrag}</td>
            <td>{props.date}</td>
        </tr>);
}

export default IncomeItem;