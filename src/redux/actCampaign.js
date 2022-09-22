import { REMOVE_CAMPAIGN, ADD_CAMPAIGN } from "../constan";

//thêm campaign
export const actAddCampaign = (data) => {
  return { type: ADD_CAMPAIGN, data};
};
//action xóa campaign
export const actRemoveCampaign = (content) => {
  return {type: REMOVE_CAMPAIGN, content};
};
