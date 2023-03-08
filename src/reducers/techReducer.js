import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR} from "../actions/types";
const initialStates ={
    techs: null,
    loading: false,
    error: null
}
export default (state=initialStates, action)=>{
    switch(action.type){
        case ADD_TECH:
            return {
                ...state,
                techs: [...state.techs, action.payload],
                loading: false
            }
        case GET_TECHS:
            return{
                ...state,
                techs: action.payload,
                loading: false
            }
        case TECHS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            case DELETE_TECH:
                return {
                    ...state,
                    techs: state.techs.filter(tech => tech.id !== action.payload),
                    loading: false
                }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}