import TableLetter from './TableLetter'

const TableCell = ({ word }) => {

    return (
        <td>
            {Array.from(word).map((letter, index) => (
                <TableLetter key={index} letter={letter} index={index}/>
            ))}
        </td>
    )
}

export default TableCell