import { useState } from 'react';
import RenderSchema from './RenderSchema';
import SaveSegment from './SaveSegment';

const AddnewSchema = (props) => {
    const {segmentName} = props;
    const [selectedSchemas, setSelectedSchemas] = useState([]);
    const [availableSchemas, setAvailableSchemas] = useState([
        { id: '1', label: 'First Name', value: 'first_name' },
        { id: '2', label: 'Last Name', value: 'last_name' },
        { id: '3', label: 'Gender', value: 'gender' },
        { id: '4', label: 'Age', value: 'age' },
        { id: '5', label: 'Account Name', value: 'account_name' },
        { id: '6', label: 'City', value: 'city' },
        { id: '7', label: 'State', value: 'state' },
    ]);

    const handleAddNewSchema = () => {
        const schemaDropdown = document.getElementById('schemaDropdown');
        const selectedValue = schemaDropdown && schemaDropdown.value;
        if (selectedValue !== undefined && availableSchemas !== undefined && selectedValue !== null) {
            const selectedOption = availableSchemas.find(schema => schema.value === selectedValue);
            setSelectedSchemas([...selectedSchemas, selectedOption]);
            setAvailableSchemas(availableSchemas.filter(schema => schema.value !== selectedValue));
        }
    }

    const handleSubmitSegment = (e) => {
        e.preventDefault();
        const unquie_Id = '2f55fd98-e579-4127-b8e6-a6225111fecb';
        const schemaArray = selectedSchemas.map(schema => ({
            [schema.value]: schema.label
          }));
      
          const data = {
            segment_name: segmentName,
            schema: schemaArray
          };
          if(segmentName && schemaArray.length > 0) {
            console.log( JSON.stringify(data))
                async function sendData() {
                    try{
                    const response =  await fetch(`https://webhook.site/${unquie_Id}`, {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    })
                    response.then(response => response.json())
                    .then(data => {
                        console.log('Success:', data);
                    })
                    }catch(error) {
                        console.error('Error:', error);
                    }
                }
                sendData()
            }
        else {
            console.log("Segment data cannot be empty.");
            return;
        }
    }

    return (
        <div>
            <RenderSchema selectedSchemas={selectedSchemas} availableSchemas={availableSchemas} setAvailableSchemas={setAvailableSchemas} setSelectedSchemas={setSelectedSchemas} />
            <a href='#' className='text-green' onClick={handleAddNewSchema}>+Add New Schema</a>
            <SaveSegment handleSubmitSegment={handleSubmitSegment}/>

        </div>
    )
}

export default AddnewSchema