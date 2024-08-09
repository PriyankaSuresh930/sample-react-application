import React from 'react';
import Label from '../../baseComponent/Label';

export const NameSegment = ({segmentName, setSegmentName}) => {
  return (
    <div>
        <Label>Enter the Name of the Segment</Label>
        <input type="text" className='input-field mt-3' value={segmentName} onChange={(e) => setSegmentName(e.target.value)} placeholder='Name of the segment'/>
        <p className='mt-2'>To save your segment, you need to add the schemas to build the query.</p>
    </div>
  )
}