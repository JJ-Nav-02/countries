
const Search = ({ newCountrie, handle }) => {
    return (
        <div>
            find countries{' '}
            <input type="text" value={newCountrie} onChange={handle} placeholder=" write a countrie" />
        </div>
    )
}

export default Search