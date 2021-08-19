import '';


const MultSelect = () => {
    const countryList = useSelector(state => state.countryList)

    return (
        <select name="countryId" id="countries" multiple>
            {countryList.map(ct => {
                return <option value={ct.id}>{ct.name}</option>
            })}
        </select>
    )
}

export default MultSelect;