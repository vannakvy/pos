import {
 SECTION_LIST_REQUEST,
 SECTION_LIST_SUCCESS,
 SECTION_LIST_FAIL,
 SECTION_CREATE_FAIL,
 SECTION_CREATE_REQUEST,
 SECTION_CREATE_RESET,
 SECTION_CREATE_SUCCESS,
 SECTION_DELETE_REQUEST,
 SECTION_DELETE_SUCCESS,
 SECTION_DELETE_FAIL,
 SECTION_DELETE_RESET,
 VIDEO_CREATE_REQUEST,
 VIDEO_CREATE_SUCCESS,
 VIDEO_CREATE_FAIL,
 VIDEO_CREATE_RESET,
 SECTION_UPDATE_REQUEST,
 SECTION_UPDATE_SUCCESS,
 SECTION_UPDATE_FAIL,
 SECTION_UPDATE_RESET,
 VIDEO_DELETE_REQUEST,
 VIDEO_DELETE_FAIL,
 VIDEO_DELETE_RESET,
 VIDEO_DELETE_SUCCESS,
 VIDEO_UPDATE_REQUEST,
 VIDEO_UPDATE_SUCCESS,
 VIDEO_UPDATE_FAIL,
 VIDEO_UPDATE_RESET,
} from '../constants/courseConstants';

export const sectionListReducer = (state = { sections: [] }, action) => {
 switch (action.type) {
  case SECTION_LIST_REQUEST:
   return { loading: true };
  case SECTION_LIST_SUCCESS:
   return { loading: false, sections: action.payload };
  case SECTION_LIST_FAIL:
   return { loading: false, error: action.payload };
  default:
   return state;
 }
};

export const sectionCreateReducer = (state = { section: {} }, action) => {
 switch (action.type) {
  case SECTION_CREATE_REQUEST:
   return { loading: true };
  case SECTION_CREATE_SUCCESS:
   return { loading: false, success: true, section: action.payload };
  case SECTION_CREATE_FAIL:
   return { loading: false, error: action.payload };
  case SECTION_CREATE_RESET:
   return {};
  default:
   return state;
 }
};

export const sectionDeleteReducer = (state = {}, action) => {
 switch (action.type) {
  case SECTION_DELETE_REQUEST:
   return { loading: true };
  case SECTION_DELETE_SUCCESS:
   return { loading: false, success: true };
  case SECTION_DELETE_FAIL:
   return { loading: false, error: action.payload };
  case SECTION_DELETE_RESET:
   return {};
  default:
   return state;
 }
};

export const sectionUpdateReducer = (state = { section: {} }, action) => {
 switch (action.type) {
  case SECTION_UPDATE_REQUEST:
   return { loading: true };
  case SECTION_UPDATE_SUCCESS:
   return { loading: false, success: true, section: action.payload };
  case SECTION_UPDATE_FAIL:
   return { loading: false, error: action.payload };
  case SECTION_UPDATE_RESET:
   return {};
  default:
   return state;
 }
};

export const videoCreateReducer = (state = { video: {} }, action) => {
 switch (action.type) {
  case VIDEO_CREATE_REQUEST:
   return { loading: true };
  case VIDEO_CREATE_SUCCESS:
   return { loading: false, success: true, video: action.payload };
  case VIDEO_CREATE_FAIL:
   return { loading: false, error: action.payload };
  case VIDEO_CREATE_RESET:
   return {};
  default:
   return state;
 }
};

export const videoDeleteReducer = (state = {}, action) => {
 switch (action.type) {
  case VIDEO_DELETE_REQUEST:
   return { loading: true };
  case VIDEO_DELETE_SUCCESS:
   return { loading: false, success: true };
  case VIDEO_DELETE_FAIL:
   return { loading: false, error: action.payload };
  case VIDEO_DELETE_RESET:
   return {};
  default:
   return state;
 }
};

export const videoUpdateReducer = (state = { video: {} }, action) => {
 switch (action.type) {
  case VIDEO_UPDATE_REQUEST:
   return { loading: true };
  case VIDEO_UPDATE_SUCCESS:
   return { loading: false, success: true, video: action.payload };
  case VIDEO_UPDATE_FAIL:
   return { loading: false, error: action.payload };
  case VIDEO_UPDATE_RESET:
   return {};
  default:
   return state;
 }
};
