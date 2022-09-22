import { ADD_CAMPAIGN, REMOVE_CAMPAIGN } from "../constan";

const campaignReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CAMPAIGN:
      let data = [...state]
      data.push(action.data)
      return data;
    case REMOVE_CAMPAIGN:
      const content = action.content;
      const newlist = state.filter(loaitin => loaitin.content != content);
      console.log("Xóa LT:", newlist);
      return newlist;
    default: return state;
  }
};
export default campaignReducer