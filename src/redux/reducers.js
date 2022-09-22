import {combineReducers} from 'redux' 
import campaignReducer from './CampaignReducer'
export default combineReducers({
    campaign: campaignReducer
})