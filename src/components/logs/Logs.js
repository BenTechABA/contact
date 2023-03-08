// import { useEffect} from 'react'
// import { connect } from 'react-redux';
// import LogItem from './LogItem';
// import PropTypes from 'prop-types'
// import { getLogs } from '../../actions/logActions'
// import Preloader from '../layout/Preloader';
// const Logs = ({log:{logs, loading}, getLogs}) => {
//     useEffect(()=>{
//         getLogs();
//         //eslint-disable-next-line
//     }, [])
    
//     if(loading || logs === null){
//         <Preloader />
//     }
//   return (
//     <ul className="collection-with-header">
//         <li className="collection-header">
//             <h4 className="center">System Logs</h4>
//         </li>
//         <li>
//             {!loading && logs.lenght === 0 ? (<p className='center'>No logs to show...</p>) : (
//                 logs.map(log => <LogItem log={log} key={log.id}/>)
//             )}
//         </li>
//     </ul>
//   )
// }
// Logs.propTypes ={
//     log: PropTypes.object.isRequired,
// }
// const mapStateToProps = state =>({
//     log: state.log
// })
// export default connect(mapStateToProps, { getLogs })(Logs);
// import { useEffect, useState} from 'react'
// import { connect } from 'react-redux';
// import LogItem from './LogItem';
// import PropTypes from 'prop-types'
// import { getLogs } from '../../actions/logActions'
// import Preloader from '../layout/Preloader';
// const Logs = () => {
//     const [logs, setLogs] = useState([])
//     const [loading, setLoading] = useState(false)
//     useEffect(()=>{
//         getLogs();
//         //eslint-disable-next-line
//     }, [])
//     const getLogs =async()=>{
//         setLoading(true);
//         const res = await fetch('http://localhost:5000/logs')
//         const data = res.json();

//         setLogs(data)
//         setLoading(false)
//     }
//     if(loading){
//         <Preloader />
//     }
//   return (
//     <ul className="collection-with-header">
//         <li className="collection-header">
//             <h4 className="center">System Logs</h4>
//         </li>
//         <li>
//             {/* {!loading && logs.lenght === 0 ? (<p className='center'>No logs to show...</p>) : (
//                 logs.map(log => <li>{log.message}</li>)
//             )} */}
//             {logs.map(log => <li>{log.message}</li>)}
//         </li>
//     </ul>
//   )
// }
// export default Logs;
import {useEffect} from 'react'
import {connect} from 'react-redux'
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types'
import LogItem from './LogItem'
import { getLogs } from '../../actions/logActions'
const Logs = ({log: {logs, loading}, getLogs}) => {
    
    useEffect(()=>{
        getLogs();
        //eslint-disable-next-line
    }, [])
    
    if(loading || logs === null){
            <Preloader />
             }
  return ( 
    <ul className="collection-with-header">
         <li className="collection-header">
             <h4 className="center">System Logs</h4>
         </li>
         <li>
             {!loading && logs === null ? (<p className='center'>No logs to show...</p>) : (
               logs.map(log => <LogItem log={log} key={log.id}/>)
          )}
        </li>
     </ul>
  )
}
const propTypes ={
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
    log: state.log,
})
export default connect(mapStateToProps, { getLogs })(Logs);