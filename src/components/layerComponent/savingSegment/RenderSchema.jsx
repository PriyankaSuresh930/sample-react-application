
const RenderSchema = (props) => {
    const { selectedSchemas, availableSchemas, setAvailableSchemas, setSelectedSchemas } = props;

    const handleDeleteSchema = (id) => {
        const filtedData = selectedSchemas.filter(data => {
            return data.id !== id
        });
        const updateAvailableSchema = selectedSchemas.filter(data => data.id === id);
        setSelectedSchemas(filtedData);
        setAvailableSchemas([...availableSchemas, ...updateAvailableSchema]);
    }
    return (
        <>
            {
            selectedSchemas.length > 0 &&
                <div className='traits-indication text-end'>
                    <i className="dot fa fa-circle text-green"></i><span>User Traits</span>
                    <i className="dot fa fa-circle text-red"></i><span>Group Traits</span>
                </div>
            }

            <div className={`${selectedSchemas.length > 0 && "blue-box mb-3 p-1"}`}>
                {   
                    selectedSchemas.map((schema, index) => {
                    const { id, label, value } = schema;
                    return (
                        <div key={id}>
                            <i className={`dot fa fa-circle ${id % 2 == 0 ? "text-green" : "text-red"}`}></i>
                            <select
                                key={id}
                                value={value}
                                className='bg-white input-field'
                                onChange={(e) => {
                                    const newSchemas = [...selectedSchemas];
                                    const newSchema = availableSchemas.filter(data => data.value !== 0).find(val => val.value === e.target.value);
                                    newSchemas[index] = newSchema;
                                    setSelectedSchemas(newSchemas);
                                    setAvailableSchemas(
                                        availableSchemas.filter(schema => !newSchemas.includes(schema))
                                    );
                                }}
                            >
                            <option key={id} value={value} className='mb-3'>{label}</option>
                            {availableSchemas.map(availScheme => (
                                <option key={availScheme.value} value={availScheme.value}>{availScheme.label}</option>
                            ))}
                            </select>
                            <button className="delete-btn" onClick={() => handleDeleteSchema(id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="14" width="12.25" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg></button>
                        </div>
                    )
                })}
            </div>

            {availableSchemas.length > 0 &&
                <>
                    <select id="schemaDropdown" className='mt-3 bg-white input-field'>
                        {/* <option value="0" >Add Schema to Segment</option> */}
                        {availableSchemas.map((schema) => (
                            <option key={schema.id} value={schema.value}>
                                {schema.label}
                            </option>
                        ))
                        }
                    </select>
                </>
            }
        </>
    )
}

export default RenderSchema