import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'
const AddTechModal = ({addTech}) => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
   
    const onSubmit = () =>{
        if(firstName === '' || lastName === ''){
            M.toast({html: "please enter a message and tech"})
        }else{
         
           addTech({
            firstName,
            lastName
           });
           
           M.toast({html: 'added tech'})
       
       //clear filed
       setFirstname('');
       setLastName('');
       
    }
    }
  return (
    <div id='add-tech-modal' className='modal'>
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
            <div className="input-field">
                <input type="text" name='firstName' value={firstName} onChange={e => setFirstname(e.target.value)}/>
                <label htmlFor="firstName" className="active">
                    First Name
                </label>
            </div>
        </div>
        <div className="row">
            <div className="input-field">
                <input type="text" name='lastName' value={lastName} onChange={e => setLastName(e.target.value)}/>
                <label htmlFor="lastName" className="active">
                    Last Name
                </label>
            </div>
        </div>
        
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue waves-green btn-flat" onClick={onSubmit}>Enter</a>
      </div>
    </div>
  )
 
}
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}
export default connect(null, {addTech})(AddTechModal)
