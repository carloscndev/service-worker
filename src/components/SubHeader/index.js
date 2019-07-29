// Import Modules
import React from 'react'

// Import Styles
import './styles.css'

const SubheaderItem = [
  'collections',
  'clothing',
  'lookbook',
  'beauty',
  'accessories',
  'be marc'
]

const SubHeader = () =>  (
  <section className="sub-header">
    <div className="content">
      {
        SubheaderItem.map((item, index) =>
          <span key={index}>{item}</span>
        )
      }
    </div>
  </section>
)


export default SubHeader
