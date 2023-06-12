import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';

const Dropdown = () => {
  const [language,setLanguage]=useState([
    'C', 'C++', 'Python', 'java', 'Php', 'javascript', 'Ruby', 'Perl', 'Swift'
  ])
  return ( 
    <>
    <h1>MultiSelect DropDown</h1>
    <Multiselect
    isObject={false}
    onRemove={(e)=>{console.log(e)}}
    onSelect={(e)=>{console.log(e)}}
    options={language}
    selectedValues={['C']}
    showCheckbox
    />
    </>
   );
}
 
export default Dropdown;