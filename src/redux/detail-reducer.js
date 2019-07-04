export default (state = {}, { type, payload }) => {
  switch (type) {
    case 'PERSON_CREATE': {
      return { ...state, [payload.id]: [] };
    }

    case 'PERSON_DELETE': {
      const newState = { ...state };
      delete newState[payload.id];
      return newState;
    }

    case 'DETAIL_CREATE': {
      const {id, detail} = payload;
      return {...state, [id]: detail };
    }

    case 'DETAIL_UPDATE': {
      const newState = {...state};
      newState[payload.id] = payload.detail;
      return newState;
    }

    case 'DETAIL_DELETE': {
      const newState = {...state};
      delete newState[payload.id];
      return newState;
    }

    default: {
      return state;
    }
  }
};
