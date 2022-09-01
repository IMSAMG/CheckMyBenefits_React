import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentFunnel: 0,
  currentuuid: null,
  individualMemberDetails: [],
  eligibilityFormData: [],
};

export const memberEligibilityFormSlice = createSlice({
  name: "memberEligibilityForm",
  initialState,
  reducers: {
    saveMemberEligibilityFormData: (state, action) => {
      const index = state.eligibilityFormData.findIndex(
        (indv) => indv.uuid === state.currentuuid
      );
      const indvIndex = state.eligibilityFormData.findIndex(
        (indv) => indv.uuid === state.currentuuid
      );
      if (index === -1) {
        state.eligibilityFormData.push({
          ...action.payload,
          uuid: state.currentuuid,
        });
        state.individualMemberDetails.push({
          uuid: state.currentuuid,
        });
      } else {
        state.eligibilityFormData[index] = {
          ...state.eligibilityFormData[index],
          ...action.payload,
        };
        state.individualMemberDetails[indvIndex] = { uuid: state.currentuuid };
      }
    },

    setCurrentFunnel(state, action) {
      state.currentFunnel = action.payload;
    },
    setCurrentUuid(state, action) {
      state.currentuuid = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  saveMemberEligibilityFormData,
  setCurrentUuid,
  setCurrentFunnel,
} = memberEligibilityFormSlice.actions;

export default memberEligibilityFormSlice.reducer;
