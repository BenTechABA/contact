import React, { useState, useEffect} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { updateLog } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'
import TechSelectOptions from '../techs/TechSelectOptions'
const EditLogModal = ({updateLog, current}) => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    useEffect(()=>{
      if(current){
        setMessage(current.message)
        setAttention(current.attention)
        setTech(current.tech)
      }
    }, [current])
      const onSubmit = () =>{
        if(message === '' || tech === ''){
            M.toast({html: "please enter a message and tech"})
        }else{
       const updLog ={
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
       }
       updateLog(updLog)
       M.toast({html: `log updated by ${tech}`})
       //clear field
       setMessage('');
       setTech('');
       setAttention(false);
    }
    }
  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System logs</h4>
        <div className="row">
            <div className="input-field">
                <input type="text" name='message' value={message} onChange={e => setMessage(e.target.value)}/>
                
            </div>
        </div>
        <div className="row">
            <div className="input-field">
                <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                    <option value="" disabled>Select Technician</option>
                    <TechSelectOptions />
                </select>
            </div>
        </div>
        <div className="row">
            <div className="input-field">
                <p>
                    <label>
                        <input type="checkbox" className='filled-in' checked={attention} onChange={() => setAttention(!attention)}/>
                        <span>Needs Attention</span>
                    </label>
                </p>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect blue waves-green btn-flat" onClick={onSubmit}>Enter</a>
      </div>
    </div>
  )
  
}
EditLogModal.propTypes={
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
}
const mapStateToProps = (state) =>({
  current: state.log.current
})
  

const modalStyle = {
  width: '75%',
  height: '75%'
}
export default connect(mapStateToProps, {updateLog})(EditLogModal);
