import { useState } from 'react'
import Button from './baseComponent/Button'
import { NameSegment } from './layerComponent/savingSegment/NameSegment'
import AddnewSchema from './layerComponent/savingSegment/AddnewSchema'

const ViewAudience = () => {
  const [segmentName, setSegmentName] = useState('');
  return (
    <div>
      <h3 className='btn-green-blue'>View Audience</h3>
      <div className='m-3'>
        <Button
          type="button"
          className="btn-outline-green-blue"
          dataToggle="offcanvas"
          dataTarget="#offcanvasRight"
          ariaControls="offcanvasRight"
        >Save Segment</Button>
      </div>

      <div className="offcanvas offcanvas-end content" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header btn-green-blue">
          <span className="btn-close text-reset m-0" data-bs-dismiss="offcanvas" aria-label="Close"></span>
          <h6 id="offcanvasRightLabel">Saving Segment</h6>

        </div>
        <div className="offcanvas-body">
          <NameSegment segmentName={segmentName} setSegmentName={setSegmentName} />
          <AddnewSchema segmentName={segmentName} />
        </div>
      </div>
    </div>
  )
}

export default ViewAudience