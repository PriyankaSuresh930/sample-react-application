import React from 'react'

const SaveSegment = ({handleSubmitSegment}) => {
  return (
    <div className='saving-segment-footer'>
      <button type='submit' className="save-segment-btn me-3" onClick={handleSubmitSegment}>Save the Segment</button>
      <button type='button' className='cancel-btn' data-bs-dismiss="offcanvas" aria-label="Close">Cancel</button>
    </div>
  )
}

export default SaveSegment
