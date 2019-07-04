export default (state = [], { type, payload }) => {
  switch (type) {
    case 'PERSON_CREATE': {
      return [...state, payload];
    }

    case 'PERSON_UPDATE': {
      return state.map((person) =>
        person.id === payload.id ? payload : person
      );
    }

    case 'PERSON_DELETE': {
      return state.filter((person) => person.id !== payload.id);
    }

    default: {
      return state;
    }
  }
};
