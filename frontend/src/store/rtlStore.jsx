import { configureStore } from "@reduxjs/toolkit";
import rtlSettingReducer from "./rtlSetting";

const rootReducer = {
  rtl: rtlSettingReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
